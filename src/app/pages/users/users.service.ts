import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class UsersService {
    public url = "api/users";
    items: Observable<any[]>;
    private itemsCollection: AngularFirestoreCollection<any>;
    
    first: Observable<any>;

    constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth) { }
    
    public currentUser:{};

    getUsers(): Observable<User[]> {

        this.itemsCollection = this.afs.collection<any>('users');
        return this.itemsCollection.snapshotChanges().pipe( 
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as any;
                data.id = a.payload.doc.id;
                return data;
              }))
            );
          //this.items.subscribe(data => this.isLoaded(data) );
        //return this.itemsCollection.valueChanges();
        
        //return this.http.get<User[]>(this.url);
    }

    getUser(): Observable<any> {
        
        return this.afs.collection<User>('users').doc(this.afAuth.auth.currentUser.uid).valueChanges();
        /*this.itemsCollection = this.afs.collection<User>('users',ref => ref
            .where('uid', '==', this.afAuth.auth.currentUser.uid)
        );



        this.items = this.itemsCollection.snapshotChanges().pipe( 
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as User;
                data.id = a.payload.doc.id;
                return data;
              }))
            );

        this.items.subscribe(data => function(data)
        {
            console.log("user are daras",data);
        });*/
            
          //this.items.subscribe(data => this.isLoaded(data) );
        //return this.itemsCollection.valueChanges();
        
        //return this.http.get<User[]>(this.url);
    }

    addUser(user:User){	    
        this.afAuth.auth.createUserWithEmailAndPassword(user.contacts.email,user.password).then((value) => {
            user.uid = value.user.uid;
            this.itemsCollection = this.afs.collection<any>('users');
            return this.itemsCollection.doc(user.uid).set(user);    
          }).catch((error) => {
              
                this.itemsCollection = this.afs.collection<any>('users');
            return this.itemsCollection.add(user);
          });
        
        
        //return this.http.post(this.url, user);
    }

    updateUser(user:User){
        var uid = user.id;
        this.itemsCollection = this.afs.collection<any>('users');
        delete user.id;
        return this.itemsCollection.doc(uid).update(user);
    }

    deleteUser(id: string) {
        this.itemsCollection = this.afs.collection<any>('users');
        return this.itemsCollection.doc(id).delete();
    } 
} 