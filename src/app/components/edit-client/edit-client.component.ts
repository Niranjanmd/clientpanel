import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client';
import { Router,ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client :Client;
  id: string;
  constructor(
    public clientService: ClientService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
   this.id=this.route.snapshot.params['id'];

   this.clientService.getClient(this.id).subscribe( client => {
     this.client = client;
   });

  }

  onSubmit({value,valid}:{value: Client,valid: boolean}){
    if(valid){
      this.clientService.updateClient(this.id,value)
      alert('Client Details Updated Successfully');
      this.router.navigate(['/']);
    }else{
      alert('Please fill all the required fields');
    }
  }

}
