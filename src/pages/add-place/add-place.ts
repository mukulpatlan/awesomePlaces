import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { Location } from '../../models/location';
import { SetLocationPage } from '../set-location/set-location';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
	location: Location = {
		lat: 12.971599,
		lng: 77.594563
	};
  	constructor(public modalController: ModalController) {}

  	onSubmit(form: NgForm){
  		console.log(form.value);
  	}

  	onOpenMap(){
  		const modal = this.modalController.create(SetLocationPage, {location: this.location});
  		modal.present();
  	}
}
