import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { finalize } from 'rxjs/internal/operators/finalize';


declare var pg: any;

@Component({
  selector: 'project-progress-widget',
  templateUrl: './project-progress-widget.component.html',
  styleUrls: ['./project-progress-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class ProjectProgressWidgetComponent implements OnInit {
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;
  
  fileList = [];
  options = [
    { value: 'jack', label: 'Jacks' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];

  csoptions = [
    { value: 'Web-safe', label: 'Web-safe' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'SegeoUI', label: 'SegeoUI' },
  ];

  tags = ["Smith","Jane"];
  selectedOption;
  selectedOptionCS;

  selectedMultipleOption;

  private itemsUsersCollection: AngularFirestoreCollection<any>;
  public itemsUsers:any;
  private itemsNoticesToCollection: AngularFirestoreCollection<any>;
  public itemsNoticesTo:any;
  private itemsNoticesFromCollection: AngularFirestoreCollection<any>;
  public itemsNoticesFrom:any;
  notice:any = {
    to:[]
  };
  noticesTo:any = [];
  noticesFrom:any = [];
  noticesClosed:any = [];
  users:any = [];
  usersFiltered:any = [];
  constructor(public afs: AngularFirestore,public afAuth: AngularFireAuth, private storage: AngularFireStorage) {

  }
  curFile = null;
  handleChange(event)
  {
    console.log(event);
    this.curFile = event.file.originFileObj;
    //const filePath = 'test.pdf';
    //const ref = this.storage.ref(filePath);
    //const task = ref.put(file);
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
        if (data[o].id.toString() != this.afAuth.auth.currentUser.uid)
        {
          this.usersFiltered.push({value:data[o].id.toString(),label:data[o].nom + " " + data[o].prenom});
        }
        this.users.push({value:data[o].id.toString(),label:data[o].nom + " " + data[o].prenom});
      }

      let tthis = this;
      this.afAuth.auth.onAuthStateChanged(function(user) {
        if (user) {
          tthis.loadPersonals();
        }
      });

    } 
  
  
  );

    
  }

  loadPersonals() {
    //alert("klm");
    this.itemsNoticesToCollection = this.afs.collection<any>('consignes',ref => ref
        .where('to', '==', this.afAuth.auth.currentUser.uid)
      );
      this.itemsNoticesTo = this.itemsNoticesToCollection.snapshotChanges().map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      });
        this.itemsNoticesTo.subscribe(data => 
          {
            this.noticesTo = [];
          for(var o in data)
          {
            if (!data[o].closed)
            {
              data[o].fromName = this.getUserName(data[o].from);
              this.noticesTo.push(data[o]);
            }
            else {
              var exist = false;
              for (var o in this.noticesClosed)
              {
                console.log(this.noticesClosed[o].id, data[o].id);
                if (this.noticesClosed[o].id == data[o].id)
                {
                  exist = true;
                  break;
                }
              }
              if (!exist)
              {
                data[o].fromName = this.getUserName(data[o].from);
                this.noticesClosed.push(data[o]);
              }
            }
          }
        } );
      

        this.itemsNoticesFromCollection = this.afs.collection<any>('consignes',ref => ref
        .where('from', '==', this.afAuth.auth.currentUser.uid)
      );
      this.itemsNoticesFrom = this.itemsNoticesFromCollection.snapshotChanges().map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      });
        this.itemsNoticesFrom.subscribe(data => 
          {
            this.noticesFrom = [];
          for(var o in data)
          {
            if (!data[o].closed)
            {
              data[o].toName = this.getUserName(data[o].to);
            this.noticesFrom.push(data[o]);
            }
            else {
              var exist = false;
              for (var o in this.noticesClosed)
              {
                console.log(this.noticesClosed[o].id, data[o].id);
                if (this.noticesClosed[o].id == data[o].id)
                {
                  exist = true;
                  break;
                }
              }
              if (!exist)
              {
                data[o].toName = this.getUserName(data[o].to);
                this.noticesClosed.push(data[o]);
              }
              
            }
          }
        } );
  }
  getUserName(uid) {
    for(var i2 = 0;i2 < this.users.length;i2++)
    {
      //console.log(this.users[i2]);
      //console.log(dest[i],this.users[i2].id);
      if (uid == this.users[i2].value)
      {
        uid = this.users[i2].label;
      }
    }
    
    return uid;
    //alert("");
  }
  getUserNames(dest) {
    for(var i = 0;i < dest.length;i++)
    {
      for(var i2 = 0;i2 < this.users.length;i2++)
      {
        //console.log(this.users[i2]);
        //console.log(dest[i],this.users[i2].id);
        if (dest[i] == this.users[i2].value)
        {
          dest[i] = this.users[i2].label;
        }
      }
      
    }
    console.log("ddd",dest);
    return dest;
    //alert("");
  }
  closeNotice() {
    var uid = this.notice.id;
      delete this.notice.id;
      this.notice.closed = true;
      this.itemsNoticesToCollection.doc(uid).update(this.notice);
      this.addNewAppModal.hide();
  }
  addRow() {

    if (this.isNew)
    {
      this.notice.from = this.afAuth.auth.currentUser.uid;
      this.notice.dateCreation = new Date();
      this.notice.state_to = 0;
      this.notice.state_from = 0;
    /*fileList = [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'http://pages.revox.io/dashboard/3.0.0/html/condensed/assets/img/profiles/avatar_small2x.jpg',
    }];*/

    for (var o in this.notice.files)
    {
      this.notice.files[o] = {
        uid: this.notice.files[o].uid,
        name: this.notice.files[o].name,
        url: this.notice.files[o].url,
        status: 'done'
      };
    }
    //this.fileList[0].status = 'done';

    //file.onSuccess();

    this.itemsNoticesToCollection.add(this.notice);    
    }
    else {
      var uid = this.notice.id;
      delete this.notice.id;
      if (!this.notice.replys) {
        this.notice.replys = [];
      }

      

      if (this.notice.reply != "")
      {
        if (this.afAuth.auth.currentUser.uid.toString() == this.notice.from) {
          this.notice.state_to = 1;
          this.notice.state_from = 0;
        }
        else {
          this.notice.state_from = 1;
        }
        this.notice.replys.push({from:this.afAuth.auth.currentUser.uid.toString(),message:this.notice.reply,dateCreation:new Date()});
      }
      else {
        if (this.afAuth.auth.currentUser.uid.toString() == this.notice.from) {
          this.notice.state_to = 2;
          this.notice.state_from = 0;
        }
        else {
          this.notice.state_from = 2;
        }
      }
      this.notice.reply = "";
      this.itemsNoticesToCollection.doc(uid).update(this.notice);

    }
    this.addNewAppModal.hide();
    //console.log(this.notice);
  }

  isNew:boolean;
  isOwner:boolean;

  onMessageKeyPress(event){
    if (event.keyCode == 13) {
      if(this.notice.reply){
        
      }
    }
  }

  showModal(notice){
    if (!notice)
    {
      this.isNew = true;
      this.isOwner = true;  
      this.notice = {
        filePath:uuid(),
        files:[],
        to:null
      };
    }
    else {
      this.isNew = false;
      this.notice = {...notice };
      this.isOwner = (this.afAuth.auth.currentUser.uid.toString()==this.notice.from.toString());  
      //alert(this.afAuth.auth.currentUser.uid.toString() + "/" + this.notice.to.toString());
    }

    
    //if (!user)
    //{
    //    user = {contacts:{}}
    //}
    //this.user = user;

    this.addNewAppModal.show();
  }
  upload = (file: any) => {
    console.log(file);
    //const file = this.curFile;
    const filePath = this.notice.filePath + '/test.pdf';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file.file).then(() => {
      ref.getDownloadURL().subscribe(url=>{
        if(url){
            //wirte the url to firestore
            this.notice.files[this.notice.files.length-1].url = url;
            file.onSuccess();
        }
      })
    })

    //this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    
    
    
    //file.onSuccess();
    /*setTimeout(() => {
      file.onProgress({percent:50});
      setTimeout(() => {
        const item = this.fileList.find(w => w.uid === file.file.uid);
        item.thumbUrl = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`;
        item.url = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`;
        // notify success
        file.onSuccess();
      }, 500);
    }, 10)*/
  }
}