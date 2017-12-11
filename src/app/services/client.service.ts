import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ClientService {
  private apiUrl ='http://localhost:55694/api/client/';
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;


  constructor(
    public af: AngularFireDatabase,
    public hReq : Http
    ) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
    // this.getHttpClients();
    // this.getHttpData();
  }

  getApiClients(){
    return this.hReq.get(this.apiUrl)
    .map((res:Response) => res.json());
  }


  getClients() {
    return this.clients;
  }

  // getClient(id: string){
  //   this.client = this.af.object('/clients/'+id) as FirebaseObjectObservable<Client>;
  //   return this.client;
  // }


  getClient(id: string){
    return this.hReq.get(this.apiUrl+id).map((res)=>res.json());
  }


  // newClient(client: Client){
  //   this.clients.push(client);
  // }

  newClient(client: Client){
    let headers=new Headers();
    headers.append('content-type', 'application/json');
    return this.hReq.post(this.apiUrl,client,{headers: headers})
    .map((res)=>res.json());
  }

  // updateClient(id: string, client: Client){
  //   return this.clients.update(id,client);
  // }

  updateClient(id:string , client: Client){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.hReq.put(this.apiUrl+id,client,{headers: headers})
    .map((res)=>res.json());
  }

  deleteClient(id:string){
    return this.clients.remove(id);
  }

}