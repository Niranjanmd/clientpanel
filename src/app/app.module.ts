import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Fire Import
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// component import
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Services Import
import { ClientService } from './services/client.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// angular2 Flash
// import { FlashMessagesModule } from 'angular2-flash-messages/module';

const appRouts: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component : LoginComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'edit-client/:id', component: EditClientComponent },
  {path: 'client/:id', component: ClientDetailsComponent}
];

export const firebaseCofig = {
  apiKey: 'AIzaSyCkjoXXzkQ7ehNoQeY0F3GXOoZdFtjC2hE',
  authDomain: 'clientpanel-f1499.firebaseapp.com',
  databaseURL: 'https://clientpanel-f1499.firebaseio.com',
  storageBucket: 'clientpanel-f1499.appspot.com',
  messagingSenderId: '152569484958'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    AngularFireModule.initializeApp(firebaseCofig),
    AngularFireDatabaseModule,
    FormsModule,
    // FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
