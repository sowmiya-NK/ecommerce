import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice: AuthserviceService = inject(AuthserviceService);
  const router: Router = inject(Router);

  if (authservice.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
