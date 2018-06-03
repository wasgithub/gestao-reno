export function convertToBoolean(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on' || val === '');
    }
  
    if (typeof val === 'number') {
      return val === 1;
    }
  
    return !!val;
  }
  
  export function convertToInt(value: any): number {
    return parseInt(value, 10);
  }
  
  export function isTypeof(object: any, type: any) {
    return typeof object === type;
  }
  
  /**
   *
   * @param fn Função que será executada dentro do contexto. Podendo ser o nome da função
   * ou a referência da mesma.
   *
   * @param context Contexto do qual a função será executada.
   */
  export function callFunction(fn: any, context: any, param?): void {
    if (isTypeof(fn, 'function')) {
      fn.call(context, param);
    } else {
      context[fn](param);
    }
  }
  
  export function convertIsoToDate(value: string , start: boolean, end: boolean) {
    if (value) {
      const day = parseInt(value.substring(8, 10), 10);
      const month = parseInt(value.substring(5, 7), 10);
      const year = parseInt(value.substring(0, 4), 10);
      if (start) {
        return new Date(year, month - 1, day, 0, 0, 0);
      } else if (end) {
        return new Date(year, month - 1, day, 23, 59, 59);
      } else {
        const milliseconds = Date.parse(value);
        const timezone = new Date().getTimezoneOffset() * 60000;
        return new Date(milliseconds + timezone);
      }
    }
  }
  
  export function convertDateToISOExtended(value: Date, time: string) {
    if (value) {
      const day = value.getDate() < 10 ? '0' + value.getDate() : value.getDate();
      const month = value.getMonth() + 1 < 10 ? '0' + (value.getMonth() + 1) : (value.getMonth() + 1);
      const year = value.getFullYear();
      const dateString = value.toString();
  
      if (time !== null) {
        return year + '-' + month + '-' + day + time;
      } else {
        return year + '-' + month + '-' + day + 'T' + dateString.substring(16, 24) +
                dateString.substring(28, 31) + ':' + dateString.substring(31, 33);
      }
    } else {
      return null;
    }
  }
  
   // Verifica qual o dispositivo que está sendo usado
  export function isMobile() {
    const userAgent = window.navigator.userAgent;
  
    return userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i);
  }
  
  export function sortOptionsByProperty(options: Array<any>, property: string) {
    options.sort((optionA, optionB) => {
      optionA = optionA[property].toString().toLowerCase();
      optionB = optionB[property].toString().toLowerCase();
  
      if (optionA < optionB) {
        return -1;
      }
      if (optionA > optionB) {
        return 1;
      }
      return 0;
    });
  }
  
  export function removeDuplicatedOptions(list: Array<any>) {
    for (let i = 0; i < list.length; i++) {
      if (i === 0) { continue; }
  
      if (!(list.findIndex(op => op.value === list[i].value) === i)) {
        list.splice(i, 1);
        i--;
      }
    }
  }
  
  export function removeUndefinedAndNullOptions(list: Array<any>) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].value === undefined || list[i].value === null ) {
        list.splice(i, 1);
        i--;
      }
    }
  }
  
  export function validValue(value: any) {
    return (value !== null && value !== undefined && value !== '') || value === false;
  }
  
  export function isExternalLink(url): boolean {
     return url ? url.startsWith('http') : false;
  }
  
  export function openExternalLink(url): void {
    window.open(url, '_blank');
  }
  
  export function  getFormattedLink(link: string): string {
    let formattedLink = '';
    // Retira todos os pontos no começo da URL.
    if (link) {
      formattedLink = link.replace(/^(\.)+/g, '');
    }
    // Verifica se foi utilizado uma rota que não comece com barra.
    if (!formattedLink.startsWith('/')) {
      formattedLink = '/'.concat(formattedLink);
    }
    return formattedLink;
  }
  