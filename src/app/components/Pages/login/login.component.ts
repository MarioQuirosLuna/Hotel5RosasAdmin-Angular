import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }


  loginForm = new FormGroup({
    username: new FormControl('admin'),
    password: new FormControl('admin'),
  });

  login() {

    if(this.loginForm.controls['username'].value == 'admin' && this.loginForm.controls['password'].value == 'admin'){
      this.router.navigate(['/home-page'])
    }

  }

}
