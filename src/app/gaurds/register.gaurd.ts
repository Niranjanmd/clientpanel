import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';


@Injectable()
export class RegisterGaurd implements CanActivate {
    constructor(
        private router: Router,
        private settingService: SettingsService
    ) { }

    public canActivate(): boolean {
        let res = false;
        this.settingService.getSettings().subscribe((setting) => {
           res = setting.allowRegistration;
        });

        if (res) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    // tslint:disable-next-line:eofline
}