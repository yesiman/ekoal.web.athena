import { Component, OnInit,ViewChild,ViewEncapsulation  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ITreeOptions , TreeModel, TreeNode, TreeComponent } from 'angular-tree-component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-planning-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;
  @ViewChild(TreeComponent)
  private tree: TreeComponent;
  private itemsCollection: AngularFirestoreCollection<any>;
  public items:any;
  private itemsUsersCollection: AngularFirestoreCollection<any>;
  public itemsUsers:any;
  private itemsTachesCollection: AngularFirestoreCollection<any>;
  public itemsTaches:any;
  planning:any = {
    
  };
  formVisible = false;
  tranche:any = {};
  rja:any = {};
  users = [];
  taches = [];
  simpleNodes = [];
  options = {
    animateExpand:true,
  };
  


  sortMapBasicTable = {
    key   : null,
    nom    : null,
    prenom: null,
    activities:null,
    status:null,
    lastUpdate:null
  };

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  sortName = null;
  sortValue = null;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = (window.innerWidth < 960);
  columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
  columnModeSettingSmall = (window.innerWidth < 560) ? 'standard':'force';
  constructor(public afs: AngularFirestore,public afAuth: AngularFireAuth,private fb: FormBuilder,private route: ActivatedRoute,private router: Router) {

    this.route.params.subscribe( params => {
      this.itemDoc = afs.doc<any>('/plannings/' + params.uid);
      this.item = this.itemDoc.valueChanges();
      this.item.subscribe(data => {
        data.id = params.uid;
        this.loadData(data) 
      });
    } );

    
    window.onresize = () => {
      this.scrollBarHorizontal = (window.innerWidth < 960);
      this.columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
      this.columnModeSettingSmall = (window.innerWidth < 560) ? 'standard':'force';
    };
   }
   
   ngOnInit() {
    this.itemsUsersCollection = this.afs.collection<any>('users');
    this.itemsUsers = this.itemsUsersCollection.snapshotChanges().map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.itemsUsers.subscribe(data => 
      {
      for(var o in data)
      {
        
        this.users.push({value:data[o].id.toString(),label:data[o].nom + " " + data[o].prenom});
      }

    } 
  
    

  );

  this.itemsTachesCollection = this.afs.collection<any>('taches');
    this.itemsTaches = this.itemsTachesCollection.snapshotChanges().map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.itemsTaches.subscribe(data => 
      {
      for(var o in data)
      {
        
        this.taches.push({value:data[o].id.toString(),label:data[o].nom });
      }

    } 
  
    

  );
  
}

   loadTranches(tranches)
   {
    this.simpleNodes = [{
      id:"k",
      name:"tranches"
    }];
    if (this.planning.tranches)
    {
      this.loadTranchesRecur(this.planning.tranches,"k",this.simpleNodes[0]);
    }
   }
   loadTranchesRecur(tranches,id,parent) {
    for (var i =0;i <  tranches.length;i++)
    {
      tranches[i].key = tranches[i].id = id + i;
      if (tranches[i].children)
      {
        this.loadTranchesRecur(tranches[i].children,tranches[i].key,tranches[i]);
      }
    }
    parent.children = tranches;
    
   }
   setTranchesRecur(id,tranches) {
     
    for (var i =0;i < tranches.length;i++)
    {
      if (tranches[i].id.toString() == id.toString())
      {

        if (this.tranche.id)
        {
          tranches[i] = this.tranche;
        }
        else {
          if (!tranches[i].children)
          {
            tranches[i].children = [];
          }
          tranches[i].children.push(this.tranche);
        }
        

        return tranches[i];
      }
      else {
        if (tranches[i].children)
        {
          var ch = this.setTranchesRecur(id,tranches[i].children);
          if (ch != null)
          {
            ch = this.tranche;
            return ch;
          }
        }
      }
    }
    return null;
   }
   getTranchesRecur(id,tranches) {
    
   for (var i =0;i < tranches.length;i++)
   {
    
     if (tranches[i].id.toString() == id.toString())
     {

       return tranches[i];
     }
     else {
       if (tranches[i].children)
       {
         var ch = this.getTranchesRecur(id,tranches[i].children);
         if (ch != null)
         {
           return ch;
         }
       }
     }
   }
   return null;
  }
   loadData(data)
   {
    this.planning = data;
    

    
      this.loadTranches(this.planning.tranches);
      
    
    
   }
   addRja() {
     this.addNewAppModal.show();
   }
   addTranche() {
    this.formVisible = true;
     this.tranche = {};
    //this.simpleNodes.push({ id:999999,name: 'another node' });
    //this.tree.treeModel.update();
   }

   nodeSelected:any = null;
   onNodeSelect(ev)
   {
     if(ev.node.data.id!="k")
     {
      this.formVisible = true;

      this.tranche = Object.assign({}, this.getTranchesRecur(ev.node.data.id,this.planning.tranches));
      this.nodeSelected = this.tranche.id;
     }
     else {
      this.formVisible = false;
     }
    
    /*for (var i =0;i <  this.planning.tranches.length;i++)
    {
      if (this.planning.tranches[i].id == ev.node.data.id)
      {
        this.nodeSelected = ev.node.data.id;
        //alert("ui");
        this.tranche = Object.assign({}, this.planning.tranches[i]);
      }
    }*/
     
   }
  

  selected = [];
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
  }

  fetch(cb) {
    this.itemsCollection = this.afs.collection<any>('users');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        
        return data;
      });
    });
    this.items.subscribe(data => 
      {
        
      var adata = [];
      for(var o in data)
      {
        
        adata.push(data[o]);
      }
      
      cb(adata);
    } );
  }

  //Expandable Table Code;
  @ViewChild('expTable') expTable: any;
  expanded: any = {};

  toggleExpandRow(row) {
    
    this.expTable.rowDetail.toggleExpandRow(row);
  }
  showModal(user){
    if (!user)
    {
        user = {contacts:{}}
    }
    //this.user = user;
    //this.addNewAppModal.show();
  }
  addRow(){
    
        //(this.user.id) ? this.updateUser() : this.addUser();
    
    //this.addNewAppModal.hide();
  }
  
  detail(row)
  {
    //this.addNewAppModal.hide();
    this.showModal(row);
  }

  onDetailToggle(event) {
  }

  valid(){	    
    //alert("add");
    
    
    (this.planning.id) ? this.updatePlanning() : this.addPlanning();
    
    this.router.navigateByUrl('executive/plannings/list'); 
    
}
addPlanning() {
  this.itemsCollection = this.afs.collection('plannings');
  console.log(this.planning.start);
  console.log(this.planning.ended);
  this.itemsCollection.add(this.planning);
}
validRja() {
  if (!this.tranche.rjas) { this.tranche.rjas = []; }
  this.tranche.rjas.push(this.rja);
}
validTranche(){	    
  //alert("add");
  if (!this.planning.tranches)
  {
    this.planning.tranches = [];
  }
  
  if (this.tranche.id)
  {
    var t = this.setTranchesRecur(this.tranche.id,this.planning.tranches);
    t = this.tranche;
  }
  else {
    if (this.nodeSelected)
    {
      //alert(this.nodeSelected);
      var t = this.setTranchesRecur(this.nodeSelected,this.planning.tranches);
      //if (!t.children)
      //{
      //  t.children = [];
      //}
      //t.children.push(this.tranche);
    }
    else {
      this.planning.tranches.push(this.tranche)
    }
    
  }
  this.loadTranches(this.planning.tranches);
  this.formVisible = false;
  (this.planning.id) ? this.updatePlanning() : this.addPlanning();
  //return this.http.post(this.url, user);
}

updatePlanning(){
    var uid = this.planning.id;
    this.itemsCollection = this.afs.collection<any>('plannings');
    delete this.planning.id;
    return this.itemsCollection.doc(uid).update(this.planning);
}

deleteUser(id: string) {
    this.itemsCollection = this.afs.collection<any>('users');
    return this.itemsCollection.doc(id).delete();
} 
}
