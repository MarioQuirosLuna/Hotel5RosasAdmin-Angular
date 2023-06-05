import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() longitude: number;
  @Input() latitude: number;
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.longitude = 0;
    this.latitude = 0;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.getMapUrl());
  }

  ngOnChanges() {
    this.updateMapUrl();
  }

  ngOnInit() {
    this.updateMapUrl();
  }

  getMapUrl(): string {
    return `https://www.google.com/maps/embed/v1/view?key=AIzaSyBek6n8pdf4NvMmlOZKxgV8dw0Vixt1YUg&center=${this.latitude},${this.longitude}&zoom=15`;
  }

  updateMapUrl() {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.getMapUrl());
  }
}
