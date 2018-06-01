import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ClienteNegociosComponent } from './cliente-negocios/cliente-negocios.component';

const routes: Routes = [{
  path: '',
  component: ClientesComponent,
  children: [{
    path: 'negocios',
    component: ClienteNegociosComponent,
  }],
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
];
