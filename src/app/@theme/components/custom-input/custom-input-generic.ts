import { AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { CustomInputBaseComponent } from './custom-input-base.component';

export abstract class CustomInputGeneric extends CustomInputBaseComponent implements AfterViewInit {

  @ViewChild('inp', {read: ElementRef}) inputEl: ElementRef;

  type = 'text';

  el: ElementRef;
  valueBeforeChange: any;
  timeoutChange: any;

  constructor(el: ElementRef) {
    super();

    this.el = el;
  }

  ngAfterViewInit() {
    this.afterViewInit();
  }

  afterViewInit() {
    this.putFocus();
    this.setPaddingInput();
  }

  setPaddingInput() {
    setTimeout(() => {
      const selectorIcons = '.thf-field-icon-container:not(.thf-field-icon-container-left) > .thf-icon';
      let icons = this.el.nativeElement.querySelectorAll(selectorIcons).length;
      if (this.clean) {
        icons++;
      }
      if (icons) {
        this.inputEl.nativeElement.style.paddingRight = `${icons * 36}px`;
      }
    });
  }

  putFocus() {
    if (this.focus) {
      this.inputEl.nativeElement.focus();
    }
  }

  @HostListener('keydown', ['$event']) onKeydown(e: any) {
    if (this.mask) {
      if (e.target.keyCode !== 229) {
        this.eventOnBlur(e);
        this.objMask.keydown(e);
      }
    }
  }

  @HostListener('keyup', ['$event']) onKeyup(e: any) {
    if (this.mask) {
      if (e.target.keyCode !== 229) {
        this.eventOnBlur(e);
        this.objMask.keyup(e);
      }
      this.callOnChange(this.objMask.valueToModel);
    }
  }

  eventOnInput(e: any) {
    if (!this.mask) {
      const value = this.validMaxLength(this.maxlength, e.target.value);
      this.inputEl.nativeElement.value = value;
      this.callOnChange(value);
    }
  }

  validMaxLength(maxlength: number, value: string) {
    return (maxlength && value.length > maxlength) ? value.toString().substring(0, maxlength) : value;
  }

  eventOnFocus(e: any) {
    // Atualiza valor da variável que será usada para verificar se o campo teve alteração
    this.valueBeforeChange = this.inputEl.nativeElement.value;

    // Dispara evento quando o usuário entrar no campo
    // Este evento também é disparado quando o campo inicia com foco.
    this.enter.emit();
  }

  eventOnBlur(e: any) {
    if (this.mask) {
      this.objMask.blur(e);
    }

    this.blur.emit();

    this.controlChangeEmitter();
  }

  controlChangeEmitter() {
    // Emite o evento change manualmente quando o campo é alterado
    // Este evento é controlado manualmente devido ao preventDefault existente na máscara
    // e devido ao controle do t-clean, que também precisa emitir change
    if (this.inputEl.nativeElement.value !== this.valueBeforeChange) {
      clearTimeout(this.timeoutChange);
      this.timeoutChange = setTimeout(() => {
        this.change.emit();
      }, 200);
    }
  }

  eventOnClick(e: any) {
    // Atualiza a posição do cursor ao clicar
    if (this.mask) {
      this.objMask.click(e);
    }
  }

  hasInvalidClass() {
    return (
      this.el.nativeElement.classList.contains('ng-invalid') &&
      this.el.nativeElement.classList.contains('ng-dirty') &&
      this.inputEl.nativeElement.value !== ''
    );
  }

  getErrorPattern() {
    return (this.errorPattern !== '' && this.hasInvalidClass()) ? this.errorPattern : '';
  }

  verifyPattern(pattern: string, value: any) {
    return new RegExp(pattern).test(value);
  }

  clear(value) {
    this.callOnChange(value);
    this.controlChangeEmitter();
  }

  writeValueModel(value) {
    if (this.inputEl) {
      if (value) {
        if (this.mask) {
          this.inputEl.nativeElement.value = this.objMask.controlFormatting(String(value));

          // Se o model for definido como formatado, então precisa atualizá-lo no primeiro acesso
          if (this.objMask.formatModel) {
            this.onChangePropagate(this.objMask.valueToModel);
          }
        } else {
          this.inputEl.nativeElement.value = value;
        }
      } else {
        // Se o valor for indefinido, deve limpar o campo.
        this.inputEl.nativeElement.value = '';
      }
    }

    // Emite evento quando o model é atualizado, inclusive a primeira vez
    if (value) {
      this.change.emit();
    }
  }

  getScreenValue() {

    const screenValue = this.inputEl && this.inputEl.nativeElement.value || undefined;
    if (this.type === 'number') {
      const parsedValue = parseFloat(screenValue);
      return parsedValue || parsedValue === 0 ? parsedValue : null;
    } else {
      return screenValue;
    }
  }

  abstract extraValidation(c: AbstractControl): { [key: string]: any; };

}
