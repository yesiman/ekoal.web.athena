import { Component, ViewChild} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
  constructor(public appSettings:AppSettings,public afAuth: AngularFireAuth, public router:Router){
      this.settings = this.appSettings.settings;
  } 

  ngOnInit() { 
    var lrouter = this.router;
    this.afAuth.auth.onAuthStateChanged(function(user) {
      if (user) {
        lrouter.navigate(['/dashboard']); 
      }
    });
  }
}