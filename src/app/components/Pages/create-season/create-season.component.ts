import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-season',
  templateUrl: './create-season.component.html',
  styleUrls: ['./create-season.component.css']
})
export class CreateSeasonComponent {

  username: String = '';

  seasonForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private serviceSeason: SeasonsServiceService) {
    this.seasonForm = new FormGroup({
      nameSeason: new FormControl(''),
      seasonBeginDate: new FormControl(''),
      seasonEndDate: new FormControl('')
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  addSeason(){
    //Call Service to Add Season
    this.serviceSeason.createSeason({
      Nombre: this.seasonForm.value.nameSeason,
      Fecha_Inicio: this.seasonForm.value.seasonBeginDate,
      Fecha_Fin: this.seasonForm.value.seasonEndDate,
    }).subscribe(() => {
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
    })
  }
}
