import { Component, ElementRef, ViewChild } from '@angular/core';
import { google } from 'google-maps';
import { GraphqlService } from '../services/graphql-service/graphql.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild('map', { static: false }) googleMap!: ElementRef;
  public map: google.maps.Map;
  public marker: google.maps.Marker;
  constructor(private _graphql: GraphqlService) {}

  ngOnInit() {
    this.initMap();
    this.getPOng();
  }

  initMap() {
    let coords = new google.maps.LatLng(31, 31);

    let mapOptions: google.maps.MapOptions = {
      center: coords,
      disableDefaultUI: true,
      zoomControl: false,
      tilt: 45,
      mapTypeId: 'roadmap',
      zoom: 14,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

     this.marker = new google.maps.Marker({
      position: coords,
      map: this.map,
    });
  }

  getPOng() {
    this._graphql.ping().subscribe((data) => {
      console.log(data);
    });
  }

  removeMarkers(){
    this.marker.setVisible(false)
  }
  
  showMarker(){
    this.marker.setVisible(true)
  }
  
}
