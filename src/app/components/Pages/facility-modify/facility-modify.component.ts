import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PublicityServiceService } from '../../services/publicity-service/publicity-service.service';
import { AuthService } from '../../Util/authService';
import { FacilitiesServiceService } from '../../services/facilities-service/facilities-service.service';

@Component({
  selector: 'app-facility-modify',
  templateUrl: './facility-modify.component.html',
  styleUrls: ['./facility-modify.component.css']
})
export class FacilityModifyComponent {

  username: String = '';
  _id: Number = 0;


  objectPage: any = {
    id: 0,
    name: '',
    description: '',
    img: '',
  };

  OnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['idFacility'];
      this.objectPage.id = params['idFacility']
    });
    this.service.getIDFacility(this._id).subscribe(facility => {
      console.log(facility)
      this.objectPage.name = facility.nombre;
      this.objectPage.description = facility.descripcion;
      this.objectPage.img = facility.imagen;
      console.log(this.objectPage)
    })
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  constructor(
    private service: FacilitiesServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['idFacility'];
      this.objectPage.id = params['idFacility']
    });
    this.service.getIDFacility(this._id).subscribe(facility => {
      this.objectPage.name = facility[0].nombre;
      this.objectPage.description = facility[0].descripcion;
      this.objectPage.img = facility[0].imagen;
    })

  }


  updateName(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.objectPage.name = String(
        (nuevoValor.target as HTMLInputElement).value
      );
    }
  }

  updateDescription(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.objectPage.description = String(
        (nuevoValor.target as HTMLInputElement).value
      );
    }
  }

  Validation() {

    if (!this.objectPage.name || !this.objectPage.description || !this.objectPage.img) {
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
        .putFacility({
          PK_Facilidad: parseInt(this.objectPage.id),
          Nombre: this.objectPage.name,
          Descripcion: this.objectPage.description,
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
          this.router.navigate(['/modify-facilities'], navigationExtras).then(() => {
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
            title: 'Error al crear',
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
    this.router.navigate(['/modify-facilities'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

}
