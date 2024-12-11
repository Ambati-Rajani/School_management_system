import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth/services/auth.service";


@Injectable({
    providedIn: 'root'
})

export class TeacherGaurd implements CanActivate {
    constructor(private authService:AuthService,private router:Router) {}

    canActivate():boolean {
        const user = this.authService.currentUser;
        if(user && user.role === 'TEACHER'){
            return true;
        }

        return false;
    }
}