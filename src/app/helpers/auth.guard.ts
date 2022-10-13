import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //Get user value
        const user = this.accountService.userValue;
        //TODO: if user is present return true else navigate to login
        if(user){

            return true;
        }
        this.router.navigate(['/account/login'])
        return false; 

    }
}
