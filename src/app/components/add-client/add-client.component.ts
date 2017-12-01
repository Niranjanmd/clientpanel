import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { Router } from '@angular/router';
import { SettingsService } from './../../services/settings.service';

// import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };
  disableBalanceOnAdd = true;
  constructor(public clientService: ClientService, public settingService: SettingsService) { }

  ngOnInit() {
     this.settingService.getSettings().subscribe((setting) => {
      this.disableBalanceOnAdd = setting.disableBalanceOnAdd;
    });
  }



  onSubmit({value, valid}: {value: Client, valid: boolean}){
    if (this.disableBalanceOnAdd){
      value.balance = 0;
    }
    if (valid){
      this.clientService.newClient(value);
      alert('Client Added Successfully!!');

    }else{
     alert('Kindly Fill all the Fields');

    }

  }
}
