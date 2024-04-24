import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../AuthModule/services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const authService = new AuthService();
  const isAuthenticated = authService.isUserAuthenticated();
  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }
};
