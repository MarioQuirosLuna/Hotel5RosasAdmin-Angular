import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';

@Component({
  selector: 'app-create-season',
  templateUrl: './create-season.component.html',
  styleUrls: ['./create-season.component.css']
})
export class CreateSeasonComponent {

  username: String = '';

  seasonForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private serviceSeason: SeasonsServiceService, private authService: AuthService) {
    this.seasonForm = new FormGroup({
      nameSeason: new FormControl(''),
      seasonBeginDate: new FormControl('', Validators.required),
      seasonEndDate: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  DatesValidation() {

    let originalDate = new Date();

    let year = originalDate.getFullYear();
    let month = ('0' + (originalDate.getMonth() + 1)).slice(-2);
    let day = ('0' + originalDate.getDate()).slice(-2);

    let formatedDate = year + '-' + month + '-' + day;

    if (!this.seasonForm.value.seasonBeginDate || !this.seasonForm.value.seasonEndDate || !this.seasonForm.value.nameSeason) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, no deje campos vacíos'
      });
      return false;
    }

    if (this.seasonForm.value.seasonBeginDate < formatedDate || this.seasonForm.value.seasonEndDate < formatedDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Las fechas no deben ser menores al día de hoy'
      });
      return false;
    }

    if (this.seasonForm.value.seasonBeginDate >= this.seasonForm.value.seasonEndDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'La fecha de llegada debe ser menor a la fecha de salida'
      });

      return false;
    }

    return true;
  }

  addSeason() {
    //Call Service to Add Season
    if (this.DatesValidation()) {
      this.serviceSeason.createSeason({
        Nombre: this.seasonForm.value.nameSeason,
        Fecha_Inicio: this.seasonForm.value.seasonBeginDate,
        Fecha_Fin: this.seasonForm.value.seasonEndDate,
      }).subscribe(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El registro se creó correctamente!",
          showConfirmButton: false,
          timer: 1800,
        });
        const navigationExtras = {
          queryParams: { username: this.username },
        };
        this.router.navigate(['/manage-season'], navigationExtras).then(() => {
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
      })
    }
  }
}
