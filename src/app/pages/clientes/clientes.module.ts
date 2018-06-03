import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ClientesRoutingModule, routedComponents } from './clientes-routing.module';

import { CustomerService } from '../../@core/data/customer.service';

import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
  imports: [
    ThemeModule,
    ClientesRoutingModule,
    Ng2SmartTableModule,
    TextMaskModule,

  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    CustomerService,
  ],
})
export class ClientesModule { }
