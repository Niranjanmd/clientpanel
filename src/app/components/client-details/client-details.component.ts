
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean;
  showBalanceUpdateInput: boolean;
  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute
  
  ) { }

  ngOnInit() {
    //get id
    this.id=this.route.snapshot.params['id'];
    
    //get client

    this.clientService.getClient(this.id).subscribe(client => {
      if(client.balance > 0){
        this.hasBalance = true;
      }
      this.client=client;
      console.log(this.client); 
    });

  }

  updateBalance(id: string){
    this.clientService.updateClient(this.id,this.client);
    alert('balance Updated');
    this.showBalanceUpdateInput=false;
  }

  onDeleteClick(){
   if(confirm('Are you sure you want to delete the Client?')){
    this.clientService.deleteClient(this.id);
    this.router.navigate(['/']);
   }
  }

}
