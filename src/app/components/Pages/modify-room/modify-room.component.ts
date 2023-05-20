import { Component, Input } from '@angular/core';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-room',
  templateUrl: './modify-room.component.html',
  styleUrls: ['./modify-room.component.css']
})
export class ModifyRoomComponent {

  @Input() username: String = "";
  @Input() _id: Number = 0;

  rooms: any = [];

  roomType: any = {};

  pk_tipo_habitacion: number = 0;
  imagen: string = "";
  tarifa: number = 0;
  descripcion: string = "";
  nombre: string = "";

  constructor(private router: Router, private route: ActivatedRoute, private serviceRoom: RoomsTypeServiceService) {
    const navigationExtras = {
      queryParams: { username: this.username, id: this._id },
    };
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this._id = params['id'];
    });
    //Esto hay que obtenerlo de base de datos con el id del tipo de habitacion
    this.serviceRoom.getRoomTypeById(this._id).subscribe(roomType => {
      this.roomType = roomType;
      this.pk_tipo_habitacion = roomType.pK_Tipo_Habitacion;
      this.nombre = roomType.nombre;
      this.descripcion = roomType.descripcion;
      this.tarifa = roomType.tarifa;
      this.imagen = roomType.imagen;
    })
    this.serviceRoom.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    })
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.imagen = base64String;
        // Aquí puedes guardar 'base64String' en tu base de datos o realizar cualquier otra operación necesaria
      };

      reader.readAsDataURL(file);
      // Inicia la lectura del archivo y activa la función 'onloadend' cuando la lectura se complete
    }
  }


  actualizarNombre(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.nombre = String((nuevoValor.target as HTMLInputElement).value);
    }
  }
  actualizarDescripcion(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.descripcion = String((nuevoValor.target as HTMLInputElement).value);
    }
  }

  actualizarTarifa(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.tarifa = Number((nuevoValor.target as HTMLInputElement).value);
    }
  }

  saveRoom(): void {
    this.serviceRoom.apiRoomTypeUpdate({
      pK_Tipo_Habitacion: this.pk_tipo_habitacion,
      nombre: this.nombre,
      descripcion: this.descripcion,
      tarifa: this.tarifa,
      imagen: this.imagen
    }).subscribe(() => {
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
    })
  }
}
