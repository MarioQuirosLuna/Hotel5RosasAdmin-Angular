import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';

@Component({
  selector: 'app-manage-season',
  templateUrl: './manage-season.component.html',
  styleUrls: ['./manage-season.component.css'],
})
export class ManageSeasonComponent {
  username: String = '';
  seasons: any = [];

  constructor(
    private route: ActivatedRoute,
    private serviceSeason: SeasonsServiceService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.serviceSeason.getSeasons().subscribe((seasons) => {
      this.seasons = seasons;
    });
  }

  routerCreateSeason() {
    const navigationExtras = {
      queryParams: { username : this.username },
    };
    this.router.navigate(['/create-season'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  goEdit(_id: Number) {
    const navigationExtras = {
      queryParams: { username : this.username , id : _id },
    };
    this.router.navigate(['/modify-season'], navigationExtras).then(() => {
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
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceSeason.deleteSeason(_id).subscribe((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El registro se eliminó correctamente!",
            showConfirmButton: false,
            timer: 1800,
          });
          this.ngOnInit();
        });
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El registro no se puede eliminar!",
          showConfirmButton: false,
          timer: 1800,
        });
      }
    })
  }
}
