import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from '../../../pages/users/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService,UsersService ]
})
export class SidenavComponent implements OnInit {
  public userImage= '../assets/img/users/user.jpg';
  public menuItems:Array<any>;
  public settings: Settings;
  private userDoc: AngularFirestoreDocument<any>;
  user: Observable<any>;
  userBind:any = {};
  constructor(public appSettings:AppSettings, public menuService:MenuService,public afs: AngularFirestore,public afAuth: AngularFireAuth, public uss:UsersService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();

    

    this.userDoc = this.afs.doc<any>('/users/' + this.afAuth.auth.currentUser.uid);

    this.user = this.userDoc.valueChanges();
    this.user.subscribe(data => this.isLoaded(data) );

    //this.user = this.afs.collection<any>('users').doc(this.afAuth.auth.currentUser.uid).valueChanges();
    //console.log("this.user",this.user);
    /*this.afAuth.auth.onAuthStateChanged(function(user) {
      if (user) {
        //console.log("this.userService.getUser()",this.userService.getUser());
        //this.uss.getUser().subscribe(user => this.user = user);  
        //this.user = this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).valueChanges();
      }
    });*/
    
    //console.log("userservice says",this.usersService.getUser());
  }

  isLoaded(data) {
    this.userBind = data;

  }

  public closeSubMenus(){
    let menu = document.querySelector(".sidenav-menu-outer");
    if(menu){
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if(child){
          if(child.children[0].classList.contains('expanded')){
              child.children[0].classList.remove('expanded');
              child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}
