import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ClienteNegociosComponent } from './cliente-negocios/cliente-negocios.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { ContatosClienteComponent } from './contatos-cliente/contatos-cliente.component';

const routes: Routes = [{
  path: '',
  component: ClientesComponent,
  children: [
    {
      path: '',
      redirectTo: 'lista',
      pathMatch: 'full',
    }, 
    {
    path: 'negocios',
    component: ClienteNegociosComponent,
    },
    {
      path: 'lista',
      component: ListaClientesComponent,
    },
    {
      path: 'editar',
      component: ClienteNegociosComponent,
    },
    {
      path: 'detalhe/:id',
      component: DetalheClienteComponent,
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ClientesRoutingModule {

}

export const routedComponents = [
  ClientesComponent,
  ClienteNegociosComponent,
  ListaClientesComponent,
  DetalheClienteComponent,
  ContatosClienteComponent
];
