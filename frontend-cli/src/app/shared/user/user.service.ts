import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  public _user: any;
  public _logginOut: boolean;

  constructor(private http: Http,
    public afAuth: AngularFireAuth, private router: Router) {
    this._user = null;
    this._logginOut = false;
  }

  getUser(user: any): Promise<any | string> {
    return new Promise((resolve, reject) => {
      const url = 'user/' + (user.userName || '');
      const source = this.http.get('user/').map(res => res.json()).toPromise();
      source.then(value => resolve(value)).catch(reason => reject(reason));
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this._logginOut = true;
    this.afAuth.auth.signOut().then(value => {
      this._user = null;
      this._logginOut = false;
      this.router.navigateByUrl('/');
    });
  }




}
