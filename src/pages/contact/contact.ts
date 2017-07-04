import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  searchQuery: string = '';
  contracts: string[];

  constructor(public navCtrl: NavController) {
    this.initializeContracts();
  }

  initializeContracts() {
    this.contracts = [
      'Amsterdam',
      'Bogota',
      'Amsterdam',
      'Bogota',
    ];
  }

  getContracts(ev: any){
    let val = ev.target.value;
    
    console.log(`seachbar value >> ${val}`);

  }

}
