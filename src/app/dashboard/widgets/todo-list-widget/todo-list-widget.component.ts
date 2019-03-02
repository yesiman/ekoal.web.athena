import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
@Component({
  selector: 'todo-list-widget',
  templateUrl: './todo-list-widget.component.html',
  styleUrls: ['./todo-list-widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoListWidgetComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any>;
  inputPostit:String;
  public items:any;
  public postits:any = [];
  constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth) { }
  

  remove(uid) {
    
    this.itemsCollection.doc(uid).delete();
  }
  check(uid,curVal) {
    
    this.itemsCollection.doc(uid).update({checked:(curVal==true?false:true)});
  }

  load() {
    this.itemsCollection = this.afs.collection<any>('postits',ref => ref
        .where('from', '==', this.afAuth.auth.currentUser.uid)
      );
      this.items = this.itemsCollection.snapshotChanges().map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      });
        this.items.subscribe(data => 
          {
            this.postits = [];
            for(var o in data)
            {
            
              this.postits.push(data[o]);
            }
          
        } );
  }

  ngOnInit() {
    let tthis = this;
    this.afAuth.auth.onAuthStateChanged(function(user) {
      if (user) {
        tthis.load();
      }
      
    });
    
  }


  addNote()
  {
    let postit = 
    {
      from:this.afAuth.auth.currentUser.uid,
      txt:this.inputPostit
    }
    this.itemsCollection = this.afs.collection('postits');
    this.itemsCollection.add(postit);
    this.inputPostit = "";
   
  }
}
