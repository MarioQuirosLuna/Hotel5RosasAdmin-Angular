import { Component } from '@angular/core';
import { FacilitiesServiceService } from 'src/app/components/services/facilities-service/facilities-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-modify-facilities-page',
  templateUrl: './modify-facilities-page.component.html',
  styleUrls: ['./modify-facilities-page.component.css'],
})
export class ModifyFacilitiesPageComponent {
  facilities: any = [];

  constructor(
    private service: FacilitiesServiceService,
    private route: Router
  ) {
    this.service.getHotelFacilities().subscribe((facilities) => {
      this.facilities = facilities;
      console.log(this.facilities);
    });
  }

  deleteFacility() {
    alert('eliminar');
  }

  editFacility(idFacility: number) {
    const data = {
      userId: 123,
      userName: 'John Doe'
    };
    const navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };

    this.route.navigate(['/reservations-list'], navigationExtras);
    //alert('editar')
  }
}
