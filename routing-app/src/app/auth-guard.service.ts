import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "../../node_modules/@angular/router";
import { Observable } from "../../node_modules/rxjs/Observable";
import { Injectable } from "../../node_modules/@angular/core";
import { FakeAuthService } from "./fake-auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private fakeAuthService: FakeAuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
        return this.fakeAuthService.isAuthenticated()
        .then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return false;
                } else {
                    this.router.navigate['/'];
                }
            }
        );
    }

}