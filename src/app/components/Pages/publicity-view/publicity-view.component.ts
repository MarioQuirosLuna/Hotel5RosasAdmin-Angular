import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicityServiceService } from '../../services/publicity-service/publicity-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';

@Component({
  selector: 'app-publicity-view',
  templateUrl: './publicity-view.component.html',
  styleUrls: ['./publicity-view.component.css'],
})
export class PublicityViewComponent {
  publicity: any = [];

  username: String = '';

  constructor(
    private service: PublicityServiceService,
    private route: Router,
    private router: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.route.navigate(['']);
    }
    this.service.getPublicity().subscribe((publicity) => {
      this.publicity = publicity;
    });
  }

  routerCreatePublicity() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.route.navigate(['/create-publicity'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
  }

  goDelete(_id: number) {
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
        this.service.deletePublicity(_id).subscribe((res) => {
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

  goEdit(_id: number) {
    const navigationExtras = {
      queryParams: { username: this.username, id: _id },
    };

    this.route.navigate(['/modify-publicity'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
  }

}
