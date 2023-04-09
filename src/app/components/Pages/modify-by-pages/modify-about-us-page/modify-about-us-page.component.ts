import { Component, OnInit } from '@angular/core';
import { AboutServiceService } from 'src/app/components/services/about-service/about-service.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-about-us-page',
  templateUrl: './modify-about-us-page.component.html',
  styleUrls: ['./modify-about-us-page.component.css'],
})
export class ModifyAboutUsPageComponent {
  username: String = '';

  OnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  objectPage: any = {
    name: '',
    title: '',
    information: '',
  };
  gallery: any = [];
  arrayImagesDelete: any = [];
  opacity: number = 1;

  constructor(
    private service: AboutServiceService,
    private clipboard: Clipboard,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service.getAboutUsInfo().subscribe((hotelInfo) => {
      this.objectPage.name = hotelInfo.nombre;
      this.objectPage.title = hotelInfo.titulo;
      this.objectPage.information = hotelInfo.informacion.replace(
        /[\s\r\n\t]+/g,
        ' '
      );
    });
    this.service.getGalleryAboutUsInfo().subscribe((gallery) => {
      this.gallery = gallery;
    });
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  elementExist(element: any) {
    return this.arrayImagesDelete.includes(element);
  }

  onImageClick(imageId: number) {
    console.log('Identificador de la imagen:', imageId);

    if (this.elementExist(imageId)) {
      this.arrayImagesDelete = this.arrayImagesDelete.filter(
        (element: any) => element !== imageId
      );
    } else {
      this.arrayImagesDelete.push(imageId);
      this.gallery = this.gallery.filter(
        (element: any) => element.pK_Imagen !== imageId
      );
    }
  }

  restartImages(event: Event) {
    event.preventDefault();
    this.arrayImagesDelete = [];
    this.service.getGalleryAboutUsInfo().subscribe((gallery) => {
      this.gallery = gallery;
    });
  }
}
