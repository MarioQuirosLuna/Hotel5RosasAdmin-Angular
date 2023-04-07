import { Component } from '@angular/core';
import { UbicationServiceService } from 'src/app/components/services/ubication-service/ubication-service.service';

@Component({
  selector: 'app-modify-ubication-page',
  templateUrl: './modify-ubication-page.component.html',
  styleUrls: ['./modify-ubication-page.component.css']
})
export class ModifyUbicationPageComponent {
  ubication: string = '';

  constructor(private service: UbicationServiceService) {
    this.service.getUbication().subscribe(ubication =>{
      this.ubication = ubication[0].informacion
      console.log(ubication)
    })
  }
}
