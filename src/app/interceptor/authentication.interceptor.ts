import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { SpinnerService } from '../shared/spinner.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { LoginService } from '../component/login.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private spinnerService: SpinnerService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();
    if (localStorage.getItem('Token')) {
      let authService = this.injector.get(LoginService);
      let tokens = request.clone({
        setHeaders: {
          Authorization: `${authService.getToken()}`
        }
      })
      return next.handle(tokens)
        .pipe(tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              this.spinnerService.hide();
            }
          },
          (error) => {


            if (error instanceof HttpErrorResponse) {
              if (error.status !== 401 && error.status !== 404) {
                return;
              }
              this.router.navigateByUrl('/login')
            }
            this.spinnerService.hide();
          }
        )
        );
    }
    else {
      return next.handle(request)
        .pipe(tap(() => { },
          (error) => {
            if (error instanceof HttpErrorResponse) {
              console.log(error.status);

              if (error.status == 401) {
                console.log(error);

                this.router.navigateByUrl('unauthorised')

              }


              //  return ErrorObservable.create(response);

            }
            this.spinnerService.hide();
          }))

    }
  }
}
