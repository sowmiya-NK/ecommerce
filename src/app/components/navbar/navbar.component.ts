import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    private authservice: AuthserviceService,
    private router: Router
  ) {}

  logout() {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authservice.isLoggedIn();
  }

  getCount(): number {
    return 0;
  }
}
