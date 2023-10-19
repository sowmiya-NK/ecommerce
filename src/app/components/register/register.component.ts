import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  error: string = '';

  constructor(
    private stoarge: StorageService,
    private authService: AuthserviceService,
    private router: Router
  ) {}
  onSubmit(registerForm: NgForm) {
    console.log(registerForm);
    const value = registerForm.value;
    this.stoarge.setAllUsers(value);

    if (this.authService.isValidUser(registerForm.value)) {
      this.router.navigate(['/login'], { replaceUrl: true });
    } else {
      this.error = 'Invalid User!!';
    }
  }
}
