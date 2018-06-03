
export function requiredFailed(required: boolean, disabled: boolean, value: string | Array<any> | number) {
    const valid = ((typeof value === 'string' && value) || (typeof value === 'object' && value && value.length)
                  || (typeof value === 'number' && value));
    return (required && !disabled && !valid);
  }
  
  export function maxlengthFailed(maxlength: number, value: string) {
    return (maxlength && value && value.length > Number(maxlength));
  }
  
  export function minlengthFailed(minlength: number, disabled: boolean, value: string) {
    return (minlength && !disabled && ((value && value.length < Number(minlength) || value === '')));
  }
  
  export function patternFailed(pattern: string, value: string) {
    let reg;
    try {
      reg = new RegExp(pattern);
    } catch (e) {
      return true;
    }
    return (pattern && value && !reg.test(value));
  }
  
  export function minFailed(min: number, value: string) {
    return (min && ((value && Number(value) < min || value === '')));
  }
  
  export function maxFailed(max: number, value: string) {
    return (max && value && Number(value) > max);
  }
  
  export function dateFailed(value: string) {
    return (value && isNaN(Date.parse(value)));
  }
  