import { Injectable, OnInit } from '@angular/core';
import { Settings } from '../models/settings';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Http, Headers } from '@angular/http';
@Injectable()
export class SettingsService implements OnInit {
  settings: FirebaseObjectObservable<Settings>;
  // settings: Settings = {
  //   disableBalanceOnAdd : false,
  //   disableBalanceOnEdit: false,
  //   allowRegistration: false
  // };
  private apiUrl = 'http://localhost:55694/api/settings/';
  constructor(
    private af: AngularFireDatabase,
    private _http: Http
  ) { 
    // this.settings = this.af.object('settings') as FirebaseObjectObservable<Settings>;
  }


  public ngOnInit(): void {
   
  }

  getSettings() {
    return this._http.get(this.apiUrl)
    .map((res) => res.json());
  }

  changeSettings(setting: Settings) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this._http.put(this.apiUrl,setting,{headers:headers })
      .map((res) => res.json());
  }

}
