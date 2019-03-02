import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
declare var pg: any;
@Component({
  selector: 'executive-layout',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExecutiveLayout extends RootLayout implements OnInit {
  
  menuItems = [
    {
      label:"Tableau de board",
      routerLink:"/dashboard",
      iconType:"pg",
      iconName:"home",
    },
    {
      label:"Utilisateurs",
      routerLink:"/users/users",
      iconType:"pg",
      iconName:"home",
    },
    {
      label:"Planning",
      routerLink:"/plannings/list",
      iconType:"pg",
      iconName:"home",
    },
    {
      label:"Taches",
      details:"",
      routerLink:"/taches/taches",
      iconType:"pg",
      iconName:"home",
    },
    {
      label:"Statistiques",
      details:"",
      routerLink:"/stats/stats",
      iconType:"pg",
      iconName:"home",
    },
    
  ]

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  

  load() {
    //var afs: AngularFirestore;
    //this.itemDoc = afs.doc<any>('items/1');
    //this.item = this.itemDoc.valueChanges();
    
  }
  user:any = {};
  ngOnInit() {
    let tthis = this;
    this.afAuth.auth.onAuthStateChanged(function(user) {
      if (user) {
        tthis.itemDoc = tthis.afs.doc('/users/' + user.uid);
        tthis.item = tthis.itemDoc.valueChanges();
        tthis.item.subscribe(data => {
          
        tthis.user = data;
        });
        
        
      }
    });
    pg.isHorizontalLayout = true;
    this.changeLayout("horizontal-menu");
    this.changeLayout("horizontal-app-menu");


  }
  
}