import { Component } from '@angular/core';
import { AboutServiceService } from 'src/app/components/services/about-service/about-service.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-modify-about-us-page',
  templateUrl: './modify-about-us-page.component.html',
  styleUrls: ['./modify-about-us-page.component.css']
})
export class ModifyAboutUsPageComponent {
  objectPage: any = {
    name: '',
    title: '',
    information: ''
  };
  gallery: any = [];
  arrayImagesDelete: any = [];
  opacity: number = 1;

  constructor(
    private service: AboutServiceService,
    private clipboard: Clipboard
  ) {
    this.service.getAboutUsInfo().subscribe((hotelInfo) => {
      this.objectPage.name = hotelInfo.nombre;
      this.objectPage.title = hotelInfo.titulo;
      this.objectPage.information = hotelInfo.informacion.replace(/[\s\r\n\t]+/g, ' ');
    });
    this.service.getGalleryAboutUsInfo().subscribe((gallery) => {
      this.gallery = gallery;
    });
  }

  elementExist(element: any) {
    return this.arrayImagesDelete.includes(element);
  }

  onImageClick(imageId: number) {
    console.log('Identificador de la imagen:', imageId);

    if (this.elementExist(imageId)) {
      this.arrayImagesDelete = this.arrayImagesDelete.filter((element: any) => element !== imageId);
    } else {
      this.arrayImagesDelete.push(imageId);
      this.gallery = this.gallery.filter((element: any) => element.pK_Imagen !== imageId);
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
