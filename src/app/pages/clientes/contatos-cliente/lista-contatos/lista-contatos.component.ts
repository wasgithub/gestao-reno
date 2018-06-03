




import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

import { CustomerService } from '../../../../@core/data/customer.service';
import { ApiService } from '../../../../services/api.service';
import { Negocio } from '../../../../shared/negocio';
import { NegocioDataService } from '../../../../services/negocio-data.service';


@Component({
  selector: 'lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent {

  public items: Array<Negocio>;
  public itemsTable: Array<any> = [];
  public data: Array<any> = [];

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      
      contactDate: {
        title: 'Data Contato',
        type: 'string',
      }, 
      employee: {
        title: 'Corretor',
        type: 'string',
      },      
      returnDate: {
        title: 'Data Retorno',
        type: 'string',
      },
      totalValue: {
        title: 'Valor Total',
        type: 'string',
      },
      offeredValue: {
        title: 'Valor Ofertado',
        type: 'string',
      }, 
      feedback: {
        title: 'Feedback',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CustomerService,
              private router: Router,
              private _api: ApiService,
              private negocioDataService: NegocioDataService) {

  }

  ngOnInit(): void {
    this.loadData()
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.delete(event.data.id);
    } else {
      event.confirm.reject();
    }
  }

  loadData() {
    const result = this._api.getAllDeals('historico');
    if (result) {
      result.subscribe(dados => {
        this.items = dados;
        this.items.forEach(value => {
          this.data.push(value);
        });
        this.source.load(this.data);
      });
    }    
  }

  route(event) {
    console.log(event);
    console.log(event.data.id)

    this.router.navigate([`/pages/clientes/detalhe/${event.data.id}`]) ;
  }

  delete(id) {
    console.log(id);
    this.negocioDataService
    .deleteDealById(id)
    .subscribe(
      data => this.router.navigate([`/pages/clientes/lista`])
    );
  }  

}



