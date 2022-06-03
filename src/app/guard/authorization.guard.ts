import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../component/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanLoad {
  constructor(private router: Router, private loginService: LoginService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.loginService.getToken()) {
      return true;
    }
    this.router.navigate(['login'])
    return false
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.getToken()) {
      return true;
    }
    this.router.navigate(['login'])
    return false
  }

}
