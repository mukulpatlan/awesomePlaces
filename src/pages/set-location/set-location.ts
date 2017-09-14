import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Location } from '../../models/location';

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
	location: Location;
	marker: Location;

	constructor(private navParams:NavParams){
		this.location = navParams.get('location');
	}

	onSetMarker(ev: any){
		this.marker = new Location(ev.coords.lat, ev.coords.lng);
	}
}
