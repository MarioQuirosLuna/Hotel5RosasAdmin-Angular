import { Component, OnInit } from '@angular/core';
import { AboutServiceService } from 'src/app/components/services/about-service/about-service.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-about-us-page',
  templateUrl: './modify-about-us-page.component.html',
  styleUrls: ['./modify-about-us-page.component.css'],
})
export class ModifyAboutUsPageComponent {
  username: String = '';

  OnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  objectPage: any = {
    name: '',
    title: '',
    information: '',
  };

  constructor(
    private service: AboutServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service.getAboutUsInfo().subscribe((hotelInfo) => {
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
      .putAboutUs({
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
