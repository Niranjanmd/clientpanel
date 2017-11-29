import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, passwrd: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, passwrd)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }
}
