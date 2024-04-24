import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.headers.get('skip')) return next(req);

  const token = localStorage.getItem('token');

  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + token),
  });

  return next(reqWithHeader).pipe(
    catchError((error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          console.log('Unauthorized request: ', error.message);
        } else {
          console.log('HttpErrorRequest: ', error);
        }
      } else {
        console.log('An error occurred: ', error);
      }
      return throwError(() => error);
    })
  );
};
