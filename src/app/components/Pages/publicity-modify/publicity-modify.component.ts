import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PublicityServiceService } from '../../services/publicity-service/publicity-service.service';
import { AuthService } from '../../Util/authService';

@Component({
  selector: 'app-publicity-modify',
  templateUrl: './publicity-modify.component.html',
  styleUrls: ['./publicity-modify.component.css'],
})
export class PublicityModifyComponent {
  username: String = '';
  _id: Number = 0;

  objectPage: any = {
    name: '',
    url: '',
    img: '',
  };

  OnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.service.getPublicityId(this._id).subscribe((publicity) => {
      this._id = publicity.pK_Temporada;
      this.objectPage.name = publicity.pK_Temporada;
      this.objectPage.url = publicity.pK_Temporada;
      this.objectPage.img = publicity.pK_Temporada;
    });
  }

  constructor(
    private service: PublicityServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
    });
    this.service.getPublicityId(this._id).subscribe((publicity) => {
      this._id = publicity.pK_Publicidad;
      this.objectPage.name = publicity.nombre;
      this.objectPage.url = publicity.descripcion;
      this.objectPage.img = publicity.imagen;
    });
  }

  updateName(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.objectPage.name = String(
        (nuevoValor.target as HTMLInputElement).value
      );
    }
  }

  updateURL(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.objectPage.url = String(
        (nuevoValor.target as HTMLInputElement).value
      );
    }
  }

  Validation() {

    if (!this.objectPage.name || !this.objectPage.url || !this.objectPage.img) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, no deje campos vacíos'
      });
      return false;
    }

    return true;
  }

  savePublicity() {
    if (this.Validation()) {
      this.service
        .putPublicity({
          PK_Publicidad: this._id,
          Nombre: this.objectPage.name,
          Descripcion: this.objectPage.url,
          Imagen: this.objectPage.img,
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
          this.router.navigate(['/publicity-view'], navigationExtras).then(() => {
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
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.objectPage.img = base64String;
        // Aquí puedes guardar 'base64String' en tu base de datos o realizar cualquier otra operación necesaria
      };

      reader.readAsDataURL(file);
      // Inicia la lectura del archivo y activa la función 'onloadend' cuando la lectura se complete
    }
  }

  backPage() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/publicity-view'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }
}
