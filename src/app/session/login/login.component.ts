import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //Sample Varriables
  userName;
  password;
  constructor(public afAuth: AngularFireAuth) { }

  logMe() {
    /*this.afAuth.auth.signInWithCustomToken("???????").catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(error);
    });*/
    
    //CHEK FIREBASE
    
    //let tthis = this;
    this.afAuth.auth.signInWithEmailAndPassword(this.userName,this.password).then((credential) => {
      //console.log(this.us.getUser());
      //this.afAuth.auth.sendPasswordResetEmail("fab.grenouillet@gmail.com");
      //lrouter.navigate(['/dashboard']); 
      
    }).catch((error) => {
      alert("Veuillez vérifier vos identifiants");
    });
  }

  ngOnInit() {
  }

}
