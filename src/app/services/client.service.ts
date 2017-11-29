<<<<<<< HEAD
import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

=======
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Client } from '../models/client';
>>>>>>> 94e97fce24a4f29821e606d17482a7888076a57b

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
  }

<<<<<<< HEAD
  getClients() {
    return this.clients;
  }

  getClient(id : string){
    this.client=this.af.object('/clients/'+id) as FirebaseObjectObservable<Client>;
    return this.client;
  }


  newClient(client: Client){
    this.clients.push(client);
  }

  updateClient(id: string, client: Client){
    return this.clients.update(id,client);
  }

  deleteClient(id:string){
    return this.clients.remove(id);
  }

=======
  getClient() {
    return this.clients;
  }

>>>>>>> 94e97fce24a4f29821e606d17482a7888076a57b
}
