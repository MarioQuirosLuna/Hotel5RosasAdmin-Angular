import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ContactUsServiceService } from 'src/app/components/services/contact-us-service/contact-us-service.service';
import { AuthService } from 'src/app/components/Util/authService';

@Component({
  selector: 'app-modify-contact-us',
  templateUrl: './modify-contact-us.component.html',
  styleUrls: ['./modify-contact-us.component.css']
})
export class ModifyContactUsComponent {
  username: String = '';

  OnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  objectPage: any = {
    name: '',
    title: '',
    information: '',
  };

  constructor(
    private service: ContactUsServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.service.getContactUs().subscribe((hotelInfo) => {
      this.objectPage.name = hotelInfo.nombre;
      this.objectPage.title = hotelInfo.titulo;
      this.objectPage.information = hotelInfo.informacion.replace(
        /[\s\r\n\t]+/g,
        ' '
      );
    });
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  updateInformation(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.objectPage.information = String((nuevoValor.target as HTMLInputElement).value);
    }
  }

  saveAboutUsPage() {
    this.service
      .putContactUs({
        Informacion: this.objectPage.information,
      })
      .subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El registro se modificó correctamente!',
          showConfirmButton: false,
          timer: 1800,
        });
        const navigationExtras = {
          queryParams: { username: this.username },
        };
        this.router.navigate(['/modify-page'], navigationExtras).then(() => {
          window.history.replaceState(
            {},
            document.title,
            this.router.url.split('?')[0]
          );
        });
      }, (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al modificar',
          text: 'Por favor, intenta nuevamente más tarde.',
          showConfirmButton: true,
        });
      });
  }

  backPage() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-page'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }
}
