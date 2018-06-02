import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

import { CustomerService } from '../../../@core/data/customer.service';


@Component({
  selector: 'lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent {

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
      corretor: {
        editable: false,
        title: 'Corretor',
        type: 'string',
      },
      dataCadastro: {
        title: 'Dt.Cadastro',
        type: 'string',
      },
      cliente: {
        title: 'Cliente',
        type: 'string',
      },
      cpfCnpj: {
        title: 'CPF/CNPJ',
        type: 'string',
      },
      estado: {
        title: 'Estado',
        type: 'string',
      },
      cidade: {
        title: 'Cidade',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CustomerService, private router: Router) {
    const data = this.service.getData();
    this.source.load(data);
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



