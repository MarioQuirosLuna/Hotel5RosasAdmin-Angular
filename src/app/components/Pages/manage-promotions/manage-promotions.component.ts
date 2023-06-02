import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PromotionServiceService } from '../../services/promotion-service/promotion-service.service';
import { AuthService } from '../../Util/authService';

@Component({
  selector: 'app-manage-promotions',
  templateUrl: './manage-promotions.component.html',
  styleUrls: ['./manage-promotions.component.css'],
})
export class ManagePromotionsComponent {
  username: String = '';
  promotions: any = [];

  constructor(
    private route: ActivatedRoute,
    private servicePromotion: PromotionServiceService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.servicePromotion.getPromotion().subscribe((seasons) => {
      this.promotions = seasons;
    });
  }

  routerCreatePromotion() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/create-promotions'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  goEdit(_id: Number, _nameSeason: String, _roomType: String) {
    const navigationExtras = {
      queryParams: {
        username: this.username,
        id: _id,
        nameSeason: _nameSeason,
        roomType: _roomType,
      },
    };
    this.router.navigate(['/modify-promotion'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  goDelete(_id: Number) {
    Swal.fire({
      title: 'Quieres eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicePromotion.deletePromotion(_id).subscribe((res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El registro se eliminó correctamente!',
            showConfirmButton: false,
            timer: 1800,
          });
          this.ngOnInit();
        });
      }
    });
  }
}
