import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import Swal from 'sweetalert2';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    this.serviceSeason.getSeasons().subscribe((seasons) => {
      this.seasons = seasons;
      console.log(this.seasons);
    });
  }

  routerCreateSeason() {}

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
  }
}
