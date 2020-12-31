import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from "ngx-store";
import { Router } from '@angular/router';
import {
    restApiService
} from '../apiService.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(
        private restApiService: restApiService,
        private sessionStore: SessionStorageService,
        private router: Router) { }

    redirect(to): void {
        this.router.navigate([to]);
    }
    loginExpiredNotifier(): void {
        this.restApiService.openSnackbar('Your login session expired. Please Re-login to continue');
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.sessionStore.get('token');
        if (token == undefined || token == null || token == "") {
            token = "noToken";
        }
        const authReq = req.clone({ headers: req.headers.set("token", token) });
        return next.handle(authReq)
            .catch((error, caught) => {
                if (error.status === 403 || error.status === 401) {
                    this.sessionStore.set('token', "noToken");
                    this.loginExpiredNotifier();
                    this.router.navigate(['/login']);// remember to import router class and declare it in the class
                    return Observable.throw(error);
                } else {
                    return Observable.throw(error);
                }
            }) as any;
    }
}
