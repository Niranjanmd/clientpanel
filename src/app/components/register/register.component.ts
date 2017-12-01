import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router ) { }
  email: string;
  password: string;

  ngOnInit() {
  }
  onSubmit() {
    this.authService.register(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/']);
      alert('user created!');
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
