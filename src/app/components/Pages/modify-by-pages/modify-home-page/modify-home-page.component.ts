import { Component } from '@angular/core';
import { HomeServiceService } from 'src/app/components/services/home-service/home-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/components/Util/authService';

@Component({
  selector: 'app-modify-home-page',
  templateUrl: './modify-home-page.component.html',
  styleUrls: ['./modify-home-page.component.css'],
})
export class ModifyHomePageComponent {
  information: string = '';
  imageHotel: string = '';

  username: String = '';

  constructor(
    private service: HomeServiceService,
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthService
  ) {
    this.service.getHomeInfo().subscribe((hotelInfo) => {
      this.imageHotel = hotelInfo.imagen;
      this.information = hotelInfo.informacion.replace(/\s/g, ' ');
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.imageHotel = base64String;
        // Aquí puedes guardar 'base64String' en tu base de datos o realizar cualquier otra operación necesaria
      };

      reader.readAsDataURL(file);
      // Inicia la lectura del archivo y activa la función 'onloadend' cuando la lectura se complete
    }
  }

  updateInformation(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.information = String((nuevoValor.target as HTMLInputElement).value);
    }
  }

  saveHomePage() {
    this.service
      .putHome({
        Informacion: this.information,
        Imagen: this.imageHotel,
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
