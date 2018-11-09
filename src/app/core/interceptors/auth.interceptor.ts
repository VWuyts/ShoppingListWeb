import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

/*@Injectable({
  providedIn: 'root' // Refs: AngularProviders_2018 and AngularServices_2018
})*/
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
    return next.handle(clonedReq);
  }
}
