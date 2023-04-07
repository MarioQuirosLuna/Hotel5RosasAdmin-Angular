import { Component } from '@angular/core';
import { HomeServiceService } from 'src/app/components/services/home-service/home-service.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-modify-home-page',
  templateUrl: './modify-home-page.component.html',
  styleUrls: ['./modify-home-page.component.css'],
})
export class ModifyHomePageComponent {
  information: string = '';
  imageHotel: string = '';

  constructor(
    private service: HomeServiceService,
    private clipboard: Clipboard
  ) {
    this.service.getHomeInfo().subscribe((hotelInfo) => {
      this.imageHotel = hotelInfo.imagen;
      this.information = hotelInfo.informacion.replace(/\s/g,' ');
      console.log(hotelInfo);
    });
  }

}
