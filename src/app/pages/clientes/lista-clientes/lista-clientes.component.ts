import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

import { CustomerService } from '../../../@core/data/customer.service';
import { ApiService } from '../../../services/api.service';
import { Negocio } from '../../../shared/negocio';


@Component({
  selector: 'lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent {

  public items: Array<Negocio>;
  public itemsTable: Array<any> = [];
  public data: Array<any> = [];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false, //as an example
      custom: [{ name: 'edit', title: `<i class="nb-edit"></i>` }],
      
    },
    filter: {
      filter: false
    },

    columns: {
      id: {
        title: 'Id',
        type: 'string',
      }, 
      name: {
        title: 'Cliente',
        type: 'string',
      },      
      birthdate: {
        title: 'Dt.Cadastro',
        type: 'string',
      },
      state: {
        title: 'Estado',
        type: 'string',
      },
      city: {
        title: 'Cidade',
        type: 'number',
      }, 
      contacted: {
        title: 'Contatado',
        type: 'string',
      },
      origin: {
        title: 'Origem',
        type: 'string',
      },
      situation: {
        title: 'Situação',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CustomerService, private router: Router, private _api: ApiService) {

  }

  ngOnInit(): void {
    const result = this._api.getAllDeals();
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  route(event) {
    console.log(event);
    console.log(event.data.id)

    this.router.navigate([`/pages/clientes/detalhe/${event.data.id}`]) ;
  }

}



