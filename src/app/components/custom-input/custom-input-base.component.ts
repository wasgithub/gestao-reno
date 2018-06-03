import { AfterContentChecked, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';

import { convertToBoolean } from '../../utils/util';
import { requiredFailed, maxlengthFailed, minlengthFailed, patternFailed } from './../validators';
import { CustomMask } from './custom-mask';

/**
 * @description
 *
 * Este é um componente baseado em input, com várias propriedades do input nativo e outras
 * propriedades extras como: máscara, pattern, mensagem de erro e etc.
 * Você deve informar a variável que contém o valor como [(ngModel)]="variavel", para que o
 * input receba o valor da variável e para que ela receba as alterações do valor (two-way-databinding).
 * A propriedade name é obrigatória para que o formulário e o model funcionem corretamente.
 *
 * Importante:
 * - Caso o input não esteja dentro de um form, é preciso adicionar ngDefaultControl ao componente:
 * Exemplo: [(ngModel)]="pessoa.nome" name="nome" ngDefaultControl
 *
 * - Caso o input tenha um [(ngModel)] sem o atributo name, ocorrerá um erro de angular.
 * Então você precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
 * Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}"
 */
export abstract class CustomInputBaseComponent implements AfterContentChecked, ControlValueAccessor, Validator {

    private _placeholder?: string = '';

    /** Rótulo do campo. */
    @Input('t-label') label?: string;

    /** Texto de apoio do campo. */
    @Input('t-help') help?: string;

    /** Nome e identificador do campo. */
    @Input('name') name: string;

    /**
     * @optional
     *
     * @description
     *
     * Mensagem que aparecerá enquanto o campo não estiver preenchido.
     *
     * @default ''
     **/
    @Input('t-placeholder') set placeholder(value: string) {
      this._placeholder = value || '';
    }
    get placeholder() {
      return this._placeholder;
    }

    /**
     * @description
     *
     * Se verdadeiro, desabilita o campo.
     *
     * @default `false`
     */
    disabled?: boolean = false;
    @Input('t-disabled') set setDisabled(disabled: string) {
      this.disabled = disabled === '' ? true : convertToBoolean(disabled);

      this.updateModelToValidate();
    }

    /** Indica que o campo será somente leitura. */
    readonly?: boolean = false;
    @Input('t-readonly') set setReadonly(readonly: string) {
      this.readonly = readonly === '' ? true : convertToBoolean(readonly);
    }

    /**
     * @description
     *
     * Indica que o campo será obrigatório.
     *
     * > Esta propriedade é desconsiderada quando o input está desabilitado `(t-disabled)`.
     *
     * @default `false`
     */
    required?: boolean = false;
    @Input('t-required') set setRequired(required: string) {
      this.required = required === '' ? true : convertToBoolean(required);

      this.updateModelToValidate();
    }

    /** Se verdadeiro, o campo iniciará com foco. */
    focus?: boolean = false;
    @Input('t-focus') set setFocus(focus: string) {
      this.focus = focus === '' ? true : convertToBoolean(focus);
    }

    /** Se verdadeiro, o campo receberá um botão para ser limpo. */
    clean?: boolean = false;
    @Input('t-clean') set setClean(clean: string) {
      this.clean = clean === '' ? true : convertToBoolean(clean);
    }

    /**
     * @description
     *
     * Expressão regular para validar o campo.
     * Quando o campo possuir uma máscara `(t-mask)` será automaticamente validado por ela, porém
     * é possível definir um t-pattern para substituir a validação da máscara.
     */
    pattern?: string;
    @Input('t-pattern') set setPattern(pattern: string) {
      this.pattern = pattern;

      this.updateModelToValidate();
    }

    /**
     * @description
     *
     * Mensagem que será apresentada quando o `pattern` ou a máscara não for satisfeita.
     *
     * > Esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
     */
    @Input('t-error-pattern') errorPattern?: string = '';

    /** Indica a quantidade máxima de caracteres que o campo aceita. */
    maxlength?: number;
    @Input('t-maxlength') set setMaxlength(maxlength: string) {
      if (!isNaN(parseInt(maxlength, 10))) {
        this.maxlength = parseInt(maxlength, 10);

        this.updateModelToValidate();
      } else if (maxlength === undefined) {
        this.maxlength = undefined;

        this.updateModelToValidate();
      }
    }

    /** Indica a quantidade mínima de caracteres que o campo aceita. */
    minlength?: number;
    @Input('t-minlength') set setMinlength(minlength: string) {
      if (!isNaN(parseInt(minlength, 10))) {
        this.minlength = parseInt(minlength, 10);

        this.updateModelToValidate();
      } else if (minlength === undefined) {
        this.minlength = undefined;

        this.updateModelToValidate();
      }
    }

    /**
     * @description
     *
     * Indica uma máscara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
     * A máscara gera uma validação automática do campo, podendo esta ser substituída por um REGEX específico
     * através da propriedade t-pattern.
     * O campo será sinalizado e o formulário ficará inválido quando o valor informado estiver fora do padrão definido,
     * mesmo quando desabilitado.
     */
    mask?: string = '';
    @Input('t-mask') set setMask(mask: string) {
      this.mask = mask;

      // Atualiza Máscara do Campo
      this.objMask = new CustomMask(this.mask, this.maskFormatModel);

      this.updateModelToValidate();
    }

    /**
     * @description
     *
     * Indica se o `model` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).
     *
     * @default `false`
     */
    maskFormatModel?: boolean = false;
    @Input('t-mask-format-model') set setMaskFormatModel(maskFormatModel: string) {
      this.maskFormatModel = maskFormatModel === '' ? true : convertToBoolean(maskFormatModel);

      if (this.objMask instanceof CustomMask) {
        this.objMask.formatModel = this.maskFormatModel;

        this.updateModelToValidate();
      }
    }

    /** Evento disparado ao sair do campo. */
    @Output('t-blur') blur?: EventEmitter<any> = new EventEmitter();

    /** Evento disparado ao entrar do campo. */
    @Output('t-enter') enter?: EventEmitter<any> = new EventEmitter();

    /** Evento disparado ao alterar valor e deixar o campo. */
    @Output('t-change') change?: EventEmitter<any> = new EventEmitter();

    /** Evento disparado ao alterar valor do model. */
    @Output('t-change-model') changeModel?: EventEmitter<any> = new EventEmitter();

    type: string;

    onChangePropagate: any = null;
    onTouched: any = null;
    objMask: any;
    modelLastUpdate: any;
    readyToValidation: boolean = false;

    updateModel(value: any) {
      // Quando o input não possui um formulário, então esta função não é registrada
      if (this.onChangePropagate) {
        this.onChangePropagate(value);
      }
    }

    callOnChange(value: any) {
      this.updateModel(value);

      this.controlChangeModelEmitter(value);
    }

    ngAfterContentChecked() {
      // Seta esta variável para indicar que a tela já foi carregada e podem ser aplicadas as validações a partir desse momento
      // A partir desse momento, toda vez que uma propriedade que interfere na validação, for alterada, o model será atualizado
      // para que o campo seja validado novamente.
      this.readyToValidation = true;
    }

    controlChangeModelEmitter(value: any) {
      if (this.modelLastUpdate !== value) {
        this.changeModel.emit();
        this.modelLastUpdate = value;
      }
    }

    updateModelToValidate() {
      // Emite a atualização do model caso esta propriedade seja alterada dinamicamicamente
      // Esta verificação faz com que o método Validate() seja chamado pelo Angular.
      if (this.readyToValidation) {

        // Este timeout é necessário para quando for atualizado o model e uma propriedade do Input ao mesmo tempo.
        // Caso contrário, o writeValue não é disparado, não atualizando o model do componente.
        setTimeout(() => {
          this.updateModel(this.getScreenValue());
        });
      }
    }

    validate(c: AbstractControl): { [key: string]: any; } {

      if (requiredFailed(this.required, this.disabled, this.getScreenValue())) {
        return { required: {
          valid: false,
        }};
      }

      if (maxlengthFailed(this.maxlength, this.getScreenValue())) {
        return { maxlength: {
          valid: false,
        }};
      }

      if (minlengthFailed(this.minlength, this.disabled, this.getScreenValue())) {
        return { minlength: {
          valid: false,
        }};
      }

      if (patternFailed(this.pattern, c.value)) {
        return { pattern: {
          valid: false,
        }};
      }

      return this.extraValidation(c);
    }

    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnChange(func: any): void {
      this.onChangePropagate = func;
    }

    // Função implementada do ControlValueAccessor
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model
    registerOnTouched(func: any): void {
      this.onTouched = func;
    }

    // Função implementada do ControlValueAccessor
    writeValue(value: any) {
      this.writeValueModel(value);
    }

    // Método que receberá o valor do model
    abstract writeValueModel(value: any): void;

    // Validações do campo
    abstract extraValidation(c: AbstractControl): { [key: string]: any; };

    // Deve retornar o valor do campo
    abstract getScreenValue(): string;
  }
