import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[UsersService]
})
export class LoginComponent {
  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,public afAuth: AngularFireAuth, private us:UsersService){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      var lrouter = this.router;
      //CHEK FIREBASE
      this.afAuth.auth.signInWithEmailAndPassword(this.form.controls.email.value,this.form.controls.password.value).then((credential) => {
        console.log(this.us.getUser());
        //lrouter.navigate(['/dashboard']); 
      }).catch((error) => {
        alert("rrro");
      });
      //this.router.navigate(['/']);
    }
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}