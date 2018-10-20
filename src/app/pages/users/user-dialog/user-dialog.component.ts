import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User, UserWork, UserContacts } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  providers: [ UsersService ]  
})
export class UserDialogComponent implements OnInit {
  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User,
              public fb: FormBuilder, public usersService:UsersService) {
    this.form = this.fb.group({
      id: null,
      nom: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      prenom: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
      contacts: this.fb.group({
        email:  null,
        phone: null,
      }),
    });
  }

  ngOnInit() {
    if(this.user){
      this.form.setValue(this.user);
    } 
    else{
      this.user = new User();
      //this.user.profile = new UserProfile();
      this.user.work = 0;
      this.user.contacts = new UserContacts();
      //this.user.social = new UserSocial();
      //this.user.settings = new UserSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

  valid() {
    //alert("valid");
    console.log(this.user);
    //this.usersService.addUser(this.user);
    
  }

}
