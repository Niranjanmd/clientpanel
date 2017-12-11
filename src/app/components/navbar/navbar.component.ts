import { SettingsService } from '../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private settingService: SettingsService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

   
    this.settingService.getSettings().subscribe((setting) => {
      this.showRegister = setting.allowRegistration;
    });
  }

  onLogOutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
