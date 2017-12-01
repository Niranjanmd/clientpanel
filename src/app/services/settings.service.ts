import { Injectable, OnInit } from '@angular/core';
import { Settings } from '../models/settings';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class SettingsService implements OnInit {
  settings: FirebaseObjectObservable<Settings>;
  // settings: Settings = {
  //   disableBalanceOnAdd : false,
  //   disableBalanceOnEdit: false,
  //   allowRegistration: false
  // };
  constructor(
    private af: AngularFireDatabase
  ) { 
    this.settings = this.af.object('settings') as FirebaseObjectObservable<Settings>;
  }


  public ngOnInit(): void {
   
  }

  getSettings() {
    return this.settings;
  }

  changeSettings(setting: Settings) {
    this.settings.update(setting);
  }

}
