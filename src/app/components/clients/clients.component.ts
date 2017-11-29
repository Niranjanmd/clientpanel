import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
<<<<<<< HEAD
  clients: any[];

  totalOwed: number;

  

  constructor(public cs: ClientService) {
    
   }

  ngOnInit() {
    this.cs.getClients().subscribe(c => {
        this.clients = c;
        this.getTotalOwned();
      });
  }

  getTotalOwned(){
    let total=0;

    for(let i =0 ; i <this.clients.length;i++){
      if(!isNaN(parseFloat(this.clients[i].balance))){
        total+= parseFloat(this.clients[i].balance);
      }

    }
    this.totalOwed=total;
    console.log(total);
  }

=======
  clients: Client[];
  constructor(public cs: ClientService) { }

  ngOnInit() {
    this.cs.getClient().subscribe(c => {
        this.clients = c;
        console.log(this.clients);
      });
  }

>>>>>>> 94e97fce24a4f29821e606d17482a7888076a57b
}
