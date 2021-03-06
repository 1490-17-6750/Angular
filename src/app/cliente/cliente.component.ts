import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(
    private apiCliente: ApiclienteService

  ) {
    apiCliente.getClientes().subscribe( response =>
      {
        console.log(response);
      })
  }

  ngOnInit(): void {
  }

}
