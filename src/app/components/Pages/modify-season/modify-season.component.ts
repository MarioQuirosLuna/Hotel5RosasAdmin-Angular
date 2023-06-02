import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';

@Component({
  selector: 'app-modify-season',
  templateUrl: './modify-season.component.html',
  styleUrls: ['./modify-season.component.css'],
})
export class ModifySeasonComponent {
  @Input() username: String = '';
  @Input() _id: Number = 0;

  seasonForm: FormGroup;

  _idSeason: Number = 0;

  constructor(
    private route: ActivatedRoute,
    private serviceSeason: SeasonsServiceService,
    private router: Router,
    private authService: AuthService
  ) {
    this.seasonForm = new FormGroup({
      nameSeason: new FormControl(''),
      seasonBeginDate: new FormControl(''),
      seasonEndDate: new FormControl(''),
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.serviceSeason.getSeasonsId(this._id).subscribe((seasons) => {
      this._id = seasons.pK_Temporada;
      this.seasonForm = new FormGroup({
        nameSeason: new FormControl(seasons.nombre),
        seasonBeginDate: new FormControl(seasons.fecha_Inicio),
        seasonEndDate: new FormControl(seasons.fecha_Fin),
      });
    });
  }

  DatesValidation() {

    let originalDate = new Date();

    let year = originalDate.getFullYear();
    let month = ('0' + (originalDate.getMonth() + 1)).slice(-2);
    let day = ('0' + originalDate.getDate()).slice(-2);
    let hours = ('0' + originalDate.getHours()).slice(-2);
    let minutes = ('0' + originalDate.getMinutes()).slice(-2);

    let formatedDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;

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
        text: 'Las fechas deben ser mayores al día de hoy'
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

  editSeason() {
    if (this.DatesValidation()) {
      this.serviceSeason
        .putSeason({
          pK_Temporada: this._id,
          nombre: this.seasonForm.value.nameSeason,
          fecha_Inicio: this.seasonForm.value.seasonBeginDate,
          fecha_Fin: this.seasonForm.value.seasonEndDate,
        })
        .subscribe(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El registro se modificó correctamente!",
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
            title: 'Error al modificar',
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
    this.router.navigate(['/manage-season'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }
}
