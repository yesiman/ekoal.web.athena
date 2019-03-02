import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  user:any;
  constructor(public afAuth: AngularFireAuth,private router: Router){
      
  } 

  ngOnInit() { 
    let routerr = this.router;
    this.afAuth.auth.onAuthStateChanged(function(user) {
      if (user) {
        //routerr.navigateByUrl('/dashboard'); 
        //this.appSettings.user = user;
        //routerr.navigate(['/dashboard']); 
        //alert(window.location.href);
        if (!(window.location.href.indexOf("/dashboard") > -1))
        {
          window.location.href = "/dashboard";
        }
        
      }
      else 
      {
        if (!(window.location.href.indexOf("/session/login") > -1))
        {
          window.location.href = "/session/login";
        }
 
      }
    });
  }
}
