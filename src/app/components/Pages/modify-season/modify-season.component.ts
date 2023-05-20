import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import { FormControl, FormGroup } from '@angular/forms';

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
    private router: Router
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
    this.serviceSeason.getSeasonsId(this._id).subscribe((seasons) => {
      console.log(seasons);
      this._id = seasons.pK_Temporada;
      this.seasonForm = new FormGroup({
        nameSeason: new FormControl(seasons.nombre),
        seasonBeginDate: new FormControl(seasons.fecha_Inicio),
        seasonEndDate: new FormControl(seasons.fecha_Fin),
      });
    });
  }

  editSeason() {
    this.serviceSeason
      .putSeason({
        pK_Temporada: this._id,
        nombre: this.seasonForm.value.nameSeason,
        fecha_Inicio: this.seasonForm.value.seasonBeginDate,
        fecha_Fin: this.seasonForm.value.seasonEndDate,
      })
      .subscribe(() => {
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
      });
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
