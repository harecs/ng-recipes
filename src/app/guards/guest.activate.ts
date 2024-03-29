import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../modules/user/user.service";

@Injectable({ providedIn: "root" })
export class GuestActivate implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isAuth = !!localStorage.getItem('token');

        if (!isAuth) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}