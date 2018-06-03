import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomInputModule } from './custom-input/custom-input.module';

/**
 * @description
 *
 * Módulo dos componentes thf-combo, thf-checkbox-group, thf-datepicker, thf-email, thf-input, thf-lookup, thf-number,
 * thf-multiselect, thf-password, thf-radio-group, thf-select, thf-switch, thf-textarea, thf-upload e thf-url.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CustomInputModule
  ],
  exports: [
    CustomInputModule
  ],
  declarations: [
  ],
  providers: [],
  entryComponents: [
  ]
})
export class CustomFieldModule { }
