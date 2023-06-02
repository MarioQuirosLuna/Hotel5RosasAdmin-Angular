import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginServiceService } from '../../services/login-service/login-service.service';

import { AuthService } from '../../Util/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users_list: any = [];

  constructor(private router: Router, private service: LoginServiceService, private authService: AuthService) {
    this.service.getLogin().subscribe((users_list) => {
      this.users_list = users_list;
    });
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    for (let index = 0; index < this.users_list.length; index++) {
      if (
        this.loginForm.controls['username'].value ==
        this.users_list[index].nombre_Usuario &&
        this.loginForm.controls['password'].value ==
        this.users_list[index].constrasenna
      ) {
        this.authService.login();
        const navigationExtras = {
          queryParams: { username: this.loginForm.controls['username'].value },
        };
        this.router.navigate(['/home-page'], navigationExtras).then(() => {
          window.history.replaceState(
            {},
            document.title,
            this.router.url.split('?')[0]
          );
        });
        break;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Credenciales Incorrectas!'
        });
      }
    }
  }
}
