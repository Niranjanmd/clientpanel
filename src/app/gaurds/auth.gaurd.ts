import { Observable } from 'rxjs/Rx';
import { Injectable  } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthGaurd implements CanActivate {
 constructor(
    private router: Router,
    private afAuth: AngularFireAuth
    ) { }

    public canActivate(): Observable<boolean> {
       return this.afAuth.authState.map(auth => {
            if (!auth) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        });
    }
// tslint:disable-next-line:eofline
}