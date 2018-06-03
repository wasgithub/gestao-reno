import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    {
      path: '',
      redirectTo: 'clientes',
      pathMatch: 'full',
    }, 
    {
      path: 'clientes',
      loadChildren: './clientes/clientes.module#ClientesModule',
    },
    {
      path: 'forms',
      loadChildren: './forms/forms.module#FormsModule',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
