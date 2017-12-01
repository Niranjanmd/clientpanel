import { Injectable } from '@angular/core';
import { Settings } from '../models/settings';


@Injectable()
export class SettingsService {
  settings: Settings = {
    disableBalanceOnAdd : false,
    disableBalanceOnEdit: false,
    allowRegistration: true
  }
  constructor() { }


  getSettings(){
    return this.settings;
  }
}
