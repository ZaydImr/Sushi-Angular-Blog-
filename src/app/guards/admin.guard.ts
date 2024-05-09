import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { from, map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  return true;
  let authSrv = inject(AuthService);
  let router = inject(Router);

  // authSrv.authenticated.subscribe({
  //   next: isAuthenticated => {
  //     if (isAuthenticated)
  //       return true;
  //     else {
  //       router.navigate(['/login']);
  //       return false;
  //     }
  //   }});

  return from(authSrv.isAuthenticated.pipe(
    map(isAuthenticated => {
      if (isAuthenticated)
        return true;
      else {
        router.navigate(['/login']);
        return false;
      }
    }),
    // catchError((err: any, caught: Observable<boolean>): ObservableInput<any> => {
    //   router.navigate(['/login']);
    //   return of(false);
    // })
  ));
};
