import { Component, ViewChild} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { UsersService } from './pages/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[UsersService]
})
export class AppComponent {
  public settings: Settings;
  user:any;
  constructor(public appSettings:AppSettings,public afAuth: AngularFireAuth, public router:Router, public uss:UsersService){
      this.settings = this.appSettings.settings;
  } 

  ngOnInit() { 
    var lrouter = this.router;
    this.afAuth.auth.onAuthStateChanged(function(user) {
      if (user) {
        //this.appSettings.user = user;
        lrouter.navigate(['/dashboard']); 
      }
    });
  }
}