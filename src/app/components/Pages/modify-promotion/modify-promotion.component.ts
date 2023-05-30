import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import { PromotionServiceService } from '../../services/promotion-service/promotion-service.service';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';

@Component({
  selector: 'app-modify-promotion',
  templateUrl: './modify-promotion.component.html',
  styleUrls: ['./modify-promotion.component.css'],
})
export class ModifyPromotionComponent {
  username: String = '';

  _id: number = 0;
  seasonForm: FormGroup;

  roomsTypes: any = [];
  seasonsList: any = [];

  promotionSeason: String = '';
  typeRoom: String = '';
  promotionSeasonID: Number = 0;
  typeRoomID: Number = 0;
  promotionId : Number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicePromotion: PromotionServiceService,
    private serviceRoom: RoomsTypeServiceService,
    private serviceSeason: SeasonsServiceService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
      this.promotionSeason = params['nameSeason'];
      this.typeRoom = params['roomType'];
    });
    this.seasonForm = new FormGroup({
      nameSeason: new FormControl(''),
      typeHabitacion: new FormControl(''),
      promotion: new FormControl(''),
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
      this.promotionSeason = params['nameSeason'];
      this.typeRoom = params['roomType'];
    });
    this.serviceSeason.getSeasons().subscribe((seasons) => {
      this.seasonsList = seasons;
      for (let i = 0; i < this.seasonsList.length; i++) {
        if (this.promotionSeason == this.seasonsList[i].nombre) {
          this.promotionSeasonID = this.seasonsList[i].pK_Temporada;
          break;
        }
      }
    });
    this.serviceRoom.getRoomsType().subscribe((roomsTypes) => {
      this.roomsTypes = roomsTypes;
      for (let j = 0; j < this.roomsTypes.length; j++) {
        if (this.typeRoom == this.roomsTypes[j].nombre) {
          this.typeRoomID = this.roomsTypes[j].pK_Tipo_Habitacion;
          break;
        }
      }

      this.servicePromotion.getPromotionId(this._id).subscribe((promotion) => {
        console.log(promotion.pK_Oferta_Temporada)
        this.promotionId = promotion.pK_Oferta_Temporada;
        this.seasonForm = new FormGroup({
          nameSeason: new FormControl(this.promotionSeasonID),
          typeHabitacion: new FormControl(this.typeRoomID),
          promotion: new FormControl(promotion.oferta),
        });
      });

    });
  }

  updateSeason() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this.promotionSeason = params['nameSeason'];
      this.typeRoom = params['roomType'];
    });
    //Call Service to Add Season
    this.servicePromotion
      .putPromotion({
        pK_Oferta_Temporada: this.promotionId,
        FK_Temporada: this.seasonForm.value.nameSeason,
        FK_Tipo_Habitacion: this.seasonForm.value.typeHabitacion,
        Oferta: this.seasonForm.value.promotion,
      }).subscribe(() => {
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
        this.router.navigate(['/manage-promotions'], navigationExtras).then(() => {
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
    this.router.navigate(['/manage-promotions'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

}
