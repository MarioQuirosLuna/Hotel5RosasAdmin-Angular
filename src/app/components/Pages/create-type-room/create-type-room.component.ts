import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Util/authService';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';

@Component({
  selector: 'app-create-type-room',
  templateUrl: './create-type-room.component.html',
  styleUrls: ['./create-type-room.component.css']
})
export class CreateTypeRoomComponent {
  username: String = '';

  typeRoomForm: FormGroup;

  objectPage: any = {
    img: ''
  };
  tarifa: Number = 0;

  constructor(
    private service: RoomsTypeServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.typeRoomForm = new FormGroup({
      nameTypeRoom: new FormControl(''),
      descriptionTypeRoom: new FormControl(''),
      priceTypeRoom: new FormControl(''),
      imageTypeRoom: new FormControl(''),
    });
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  Validation() {
    if (
      !this.typeRoomForm.value.nameTypeRoom ||
      !this.typeRoomForm.value.descriptionTypeRoom ||
      !this.typeRoomForm.value.priceTypeRoom ||
      !this.typeRoomForm.value.imageTypeRoom
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, no deje campos vacíos',
      });

      return false;
    }
    if (
      this.typeRoomForm.value.priceTypeRoom.toString().length > 7
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, ingrese una cifra de menos de 7 digitos en la tarifa',
      });
      return false
    }
    return true;
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

  saveTypeRoom() {
    this.typeRoomForm.value.imageTypeRoom = this.objectPage.img;
    this.tarifa = this.typeRoomForm.value.priceTypeRoom;
    if (this.Validation()) {
      this.service
        .apiRoomInsertTypeRoom({
          Nombre: this.typeRoomForm.value.nameTypeRoom,
          Descripcion: this.typeRoomForm.value.descriptionTypeRoom,
          Tarifa: this.tarifa,
          Imagen: this.typeRoomForm.value.imageTypeRoom,
        })
        .subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El registro se creó correctamente!',
            showConfirmButton: false,
            timer: 1800,
          });
          const navigationExtras = {
            queryParams: { username: this.username },
          };
          this.router.navigate(['/manage-rooms'], navigationExtras).then(() => {
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

  backPage() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/manage-rooms'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }
}
