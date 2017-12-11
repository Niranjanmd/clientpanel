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
  update: boolean;
  constructor(
    public settingService: SettingsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.settingService.getSettings().subscribe((res)=>{
      console.log(res);
      this.settings = res;
    });
  }

  onSubmit() {
    this.settingService.changeSettings(this.settings).subscribe((res) => {
      this.update = res;
      console.log(res);
    });
  }
}
