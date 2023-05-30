import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PublicityServiceService } from '../../services/publicity-service/publicity-service.service';

@Component({
  selector: 'app-publicity-create',
  templateUrl: './publicity-create.component.html',
  styleUrls: ['./publicity-create.component.css'],
})
export class PublicityCreateComponent {
  username: String = '';

  OnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  objectPage: any = {
    name: '',
    url: '',
    img: '',
  };

  constructor(
    private service: PublicityServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
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

  savePublicity() {
    this.service
      .postCreatePublicity({
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
      });
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
