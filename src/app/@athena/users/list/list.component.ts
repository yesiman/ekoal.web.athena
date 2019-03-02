import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase';

declare var firebase: any

@Component({
  selector: 'app-basic',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;
  @ViewChild('smSlideUp') smSlideUp: ModalDirective;
  
  private itemsCollection: AngularFirestoreCollection<any>;
  public items:any;
  user:any = {
    contacts:{}
  };
  basic_table_data = [];
  expandTableData = [ {
    title   : 'First tour',
    status    : 'Active',
    price: '40,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  {
    title   : 'First tour',
    status    : 'Active',
    price: '70,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  {
    title   : 'First tour',
    status    : 'Active',
    price: '20,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  {
    title   : 'First tour',
    status    : 'Active',
    price: '90,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  ];

  strippedTableData = [ {
    title   : 'First tour',
    places    : ['United States', 'India'],
    activities: 'Wonders can be true. Believe in your dreams!',
  },
  {
    title   : 'Second tour',
    places    : ['China','Africa'],
    activities: 'Wonders can be true. Believe in your dreams!',
  },
  {
    title   : 'Third tour',
    places    : ['United States', 'India'],
    activities: 'Wonders can be true. Believe in your dreams!',
  },
  {
    title   : 'Four tour',
    places    : ['China','Africa'],
    activities: 'Wonders can be true. Believe in your dreams!',
  }
  ];
  strippedTableDataMap = {
    title    : null,
    places: null,
    activities:null,
  };

  condensedTableData = [ {
    title   : 'First tour',
    places    : 'Simple but not simpler',
    condensed: 'Wonders can be true. Believe in your dreams!',
  },
  {
    title   : 'Second tour',
    places    : 'Simple but not simpler',
    condensed: 'Wonders can be true. Believe in your dreams!',
  },
  {
    title   : 'Third tour',
    places    : 'Simple but not simpler',
    condensed: 'Wonders can be true. Believe in your dreams!',
  },
  {
    title   : 'Four tour',
    places    : 'Simple but not simpler',
    condensed: 'Wonders can be true. Believe in your dreams!',
  },
  {
    title   : 'Fifth tour',
    places    : 'Simple but not simpler',
    condensed: 'Wonders can be true. Believe in your dreams!',
  },
  ];
  condensedTableDataMap = {
    title    : null,
    places: null,
    condensed:null,
  };


  sortMapBasicTable = {
    key   : null,
    nom    : null,
    prenom: null,
    activities:null,
    status:null,
    lastUpdate:null
  };


  sortName = null;
  sortValue = null;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = (window.innerWidth < 960);
  columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
  columnModeSettingSmall = (window.innerWidth < 560) ? 'standard':'force';
  constructor(public afs: AngularFirestore,public afAuth: AngularFireAuth) {
    this.fetch((data) => {
      this.basic_table_data = data;
       //= Object.keys(data).map(function(key) {
       /// return [data[key][0]];
      //});
      
    });
    window.onresize = () => {
      this.scrollBarHorizontal = (window.innerWidth < 960);
      this.columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
      this.columnModeSettingSmall = (window.innerWidth < 560) ? 'standard':'force';
    };
   }

  ngOnInit() {
    /*this.itemsCollection.snapshotChanges().pipe( 
        map(actions => actions.map(a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            console.log(data);
            return data;
          }))
        );*/
  }

  selected = [];
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
  }

  idToRemove = "-1";
  removeRow(id){
    this.idToRemove = id;
    this.smSlideUp.show();
  }
  removeRowValid(){
    this.itemsCollection.doc(this.idToRemove).delete();
    this.smSlideUp.hide();
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
    
    this.user = user;
    this.addNewAppModal.show();
  }
  addRow(){
        (this.user.id) ? this.updateUser() : this.addUser();
    
    this.addNewAppModal.hide();
  }
  
  detail(row)
  {
    this.addNewAppModal.hide();
    this.showModal(row);
  }

  onDetailToggle(event) {
  }

  addUser(){	    
    
    //this.afAuth.auth.createUserWithEmailAndPassword(this.user.contacts.email,"temptemptemp").then((value) => {
      //this.user.uid = value.user.uid;
      this.itemsCollection = this.afs.collection<any>('users');

      //this.afAuth.auth.sendPasswordResetEmail(this.user.contacts.email);
      this.itemsCollection.doc(this.user.uid).set(this.user);    
      //this.itemsCollection.add(this.user);
      
      alert("waitok");
    //}).catch((error) => {
     // console.log("error",error);
    //  this.itemsCollection = this.afs.collection<any>('users');
      //this.afAuth.auth.sendPasswordResetEmail(this.user.contacts.email);
      
    //  alert("waitnook");
    //});
    
}

updateUser(){
    var uid = this.user.id;
    this.itemsCollection = this.afs.collection<any>('users');
    delete this.user.id;
    return this.itemsCollection.doc(uid).update(this.user);
}

deleteUser(id: string) {
    this.itemsCollection = this.afs.collection<any>('users');
    return this.itemsCollection.doc(id).delete();
} 
}
