import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionServiceService } from '../../services/promotion-service/promotion-service.service';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})
export class CreatePromotionComponent {

  username: String = '';

  seasonForm: FormGroup;

  roomsTypes: any = [];
  seasonsList: any = [];
  constructor(private router: Router, private route: ActivatedRoute, private servicePromotion: PromotionServiceService,
    private serviceRoom: RoomsTypeServiceService,private serviceSeason: SeasonsServiceService
    ) {
    this.seasonForm = new FormGroup({
      nameSeason: new FormControl(''),
      typeHabitacion: new FormControl(''),
      promotion: new FormControl('')
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    this.serviceSeason.getSeasons().subscribe((seasons) => {
      this.seasonsList = seasons;
      console.log(this.seasonsList);
    });
    this.serviceRoom.getRoomsType().subscribe((roomsTypes) => {
      this.roomsTypes = roomsTypes;
      console.log(this.roomsTypes);
    });
  }

  addSeason(){
    //Call Service to Add Season
    console.log(this.seasonForm.value)
    this.servicePromotion.postCreatePromotion({
      FK_Temporada: this.seasonForm.value.nameSeason,
      FK_Tipo_Habitacion: this.seasonForm.value.typeHabitacion,
      Oferta: this.seasonForm.value.promotion,
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
      this.router.navigate(['/manage-promotions'], navigationExtras).then(() => {
        window.history.replaceState(
          {},
          document.title,
          this.router.url.split('?')[0]
        );
      });
    })
  }
}
