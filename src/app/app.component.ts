import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { User } from './models/user';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private storage: StorageService,
    private authservice: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.storage.loaduser();
    
  }

  isLoggedIn(): boolean {
    return this.storage.isLoggedInUser();
  }
}
