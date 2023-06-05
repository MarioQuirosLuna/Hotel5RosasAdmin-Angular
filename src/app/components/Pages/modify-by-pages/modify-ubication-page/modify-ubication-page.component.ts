import { Component } from '@angular/core';
import { UbicationServiceService } from 'src/app/components/services/ubication-service/ubication-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/components/Util/authService';

@Component({
  selector: 'app-modify-ubication-page',
  templateUrl: './modify-ubication-page.component.html',
  styleUrls: ['./modify-ubication-page.component.css'],
})
export class ModifyUbicationPageComponent {
  ubication: string = '';
  latitude: number = 0;
  longitude: number = 0;

  username: String = '';

  constructor(
    private service: UbicationServiceService,
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthService
  ) {
    this.service.getUbication().subscribe((ubication) => {
      this.ubication = ubication[0].informacion;
      this.latitude = ubication[0].latitud
      this.longitude = ubication[0].longitud
    });
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.route.navigate(['']);
    }
  }

  updateInformation(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.ubication = String((nuevoValor.target as HTMLInputElement).value);
    }
  }

  updateLatitude(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.latitude = Number((nuevoValor.target as HTMLInputElement).value);
    }
  }
  updateLongitude(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.longitude = Number((nuevoValor.target as HTMLInputElement).value);
    }
  }

  saveUbicationPage() {
    this.service
      .putUbication({
        Informacion: this.ubication,
        Latitud: this.latitude,
        Longitud: this.longitude,
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
        this.route.navigate(['/modify-page'], navigationExtras).then(() => {
          window.history.replaceState(
            {},
            document.title,
            this.route.url.split('?')[0]
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
    this.route.navigate(['/modify-page'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
  }

}
