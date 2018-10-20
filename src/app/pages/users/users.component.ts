import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User, UserWork, UserContacts } from './user.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UsersService ]  
})
export class UsersComponent implements OnInit {
    public users: User[];
    public searchText: string;
    public page:any;
    public items:any;
    public settings: Settings;
    private itemsCollection: AngularFirestoreCollection<any>;
    constructor(public appSettings:AppSettings, 
                public dialog: MatDialog,
                public usersService:UsersService,
                private afs: AngularFirestore){
        
    }

    ngOnInit() {
        this.getUsers();         
    }

    public getUsers(): void {
        this.users = null; //for show spinner each time

        this.settings = this.appSettings.settings;
        //this.itemsCollection = this.afs.collection<any>('users');
        //alert("start");
        //this.items = this.itemsCollection.valueChanges();

        this.usersService.getUsers().subscribe(users => this.users = users);    
    }
    public addUser(user:User){
        this.usersService.addUser(user);
    }
    public updateUser(user:User){
        this.usersService.updateUser(user);
    }
    public deleteUser(user:User){
       this.usersService.deleteUser(user.id);
    }


    public onPageChanged(event){
        this.page = event;
        this.getUsers();
        if(this.settings.fixedHeader){      
            document.getElementById('main-content').scrollTop = 0;
        }
        else{
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openUserDialog(user){
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });
        console.log()
        dialogRef.afterClosed().subscribe(user => {
            if(user){
                (user.id) ? this.updateUser(user) : this.addUser(user);
            }
        });
    }

}