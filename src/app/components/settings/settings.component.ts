import { Settings } from '../../models/settings';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    public settingService: SettingsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.settingService.getSettings().subscribe((res)=>{
      this.settings = res;
    });
  }

  onSubmit() {
    this.settingService.changeSettings(this.settings);
  }
}
