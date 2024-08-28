import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {TokenService} from '../token/token.service';
import {inject} from '@angular/core';
import { Observable } from 'rxjs';

export const roleGuard: CanActivateFn = (
    route:ActivatedRouteSnapshot,  
    state:RouterStateSnapshot ):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
        const tokenService = inject(TokenService);
    
    
    
const isAuthorised =(route:ActivatedRouteSnapshot):boolean=>{ 
    const roles=tokenService.userRoles;
    console.log(roles)
    const expectedRoles = route.data['expectedRoles'] as string[];
    const roleMatches=roles.findIndex(roles=>expectedRoles.indexOf(roles)!==-1);

    return (roleMatches>=0)? true : false;}
    return isAuthorised(route)
};