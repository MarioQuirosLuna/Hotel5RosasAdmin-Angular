import { Component } from '@angular/core';
import { FacilitiesServiceService } from 'src/app/components/services/facilities-service/facilities-service.service';

@Component({
  selector: 'app-modify-facilities-page',
  templateUrl: './modify-facilities-page.component.html',
  styleUrls: ['./modify-facilities-page.component.css']
})
export class ModifyFacilitiesPageComponent {

  facilities: any = [];

  constructor(private service: FacilitiesServiceService) {
    this.service.getHotelFacilities().subscribe(facilities =>{
      this.facilities = facilities;
      console.log(this.facilities)
    })
  }

  deleteFacility(){
    alert('eliminar')
  }

  editFacility(){
    alert('editar')
  }

}
