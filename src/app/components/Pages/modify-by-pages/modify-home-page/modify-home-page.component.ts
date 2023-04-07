import { Component } from '@angular/core';
import { HomeServiceService } from 'src/app/components/services/home-service/home-service.service';


@Component({
  selector: 'app-modify-home-page',
  templateUrl: './modify-home-page.component.html',
  styleUrls: ['./modify-home-page.component.css']
})
export class ModifyHomePageComponent {

  information: string = '';
  imageHotel: string = ''

  constructor(private service: HomeServiceService) {
    this.service.getHomeInfo().subscribe(hotelInfo =>{
      this.imageHotel = hotelInfo.imagen
      this.information = hotelInfo.informacion
      console.log(hotelInfo)
    })
  }

}
