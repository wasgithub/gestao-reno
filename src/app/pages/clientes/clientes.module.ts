import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ClientesRoutingModule, routedComponents } from './clientes-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ClientesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ClientesModule { }
