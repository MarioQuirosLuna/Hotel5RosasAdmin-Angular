import { Component } from '@angular/core';
import { UbicationServiceService } from 'src/app/components/services/ubication-service/ubication-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-ubication-page',
  templateUrl: './modify-ubication-page.component.html',
  styleUrls: ['./modify-ubication-page.component.css'],
})
export class ModifyUbicationPageComponent {
  ubication: string = '';

  username: String = '';

  constructor(
    private service: UbicationServiceService,
    private router: ActivatedRoute
  ) {
    this.service.getUbication().subscribe((ubication) => {
      this.ubication = ubication[0].informacion;
      console.log(ubication);
    });
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }
}
