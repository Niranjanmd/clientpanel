import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  constructor(public cs: ClientService) { }

  ngOnInit() {
    this.cs.getClient().subscribe(c => {
        this.clients = c;
        console.log(this.clients);
      });
  }

}
