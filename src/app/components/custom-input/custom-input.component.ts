import { Component, ElementRef, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

import { CustomInputGeneric } from './custom-input-generic';

/**
 * @docsExtends ThfInputBaseComponent
 *
 * @example
 *
 * <example name="thf-input-basic" title="Totvs Input Basic">
 *  <file name="sample-thf-input-basic/sample-thf-input-basic.component.html"> </file>
 *  <file name="sample-thf-input-basic/sample-thf-input-basic.component.ts"> </file>
 * </example>
 *
 * <example name="thf-input-labs" title="Totvs Input Labs">
 *  <file name="sample-thf-input-labs/sample-thf-input-labs.component.html"> </file>
 *  <file name="sample-thf-input-labs/sample-thf-input-labs.component.ts"> </file>
 * </example>
 *
 * <example name="thf-input-reactive-form" title="Totvs Input - Reactive Form">
 *  <file name="sample-thf-input-reactive-form/sample-thf-input-reactive-form.component.html"> </file>
 *  <file name="sample-thf-input-reactive-form/sample-thf-input-reactive-form.component.ts"> </file>
 * </example>
 */
@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true,
  }]
})
export class CustomInputComponent extends CustomInputGeneric {

  constructor(el: ElementRef) {
    super(el);
  }

  extraValidation(c: AbstractControl): { [key: string]: any; } {
    return null;
  }

}
