import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class CustomerService {

  data = [{
    id: '1',
    employee: 'João da Silva',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação',
    
  }];

  getData() {
    return this.data;
  }

  getDataByID(id: string) {
    var client = this.data.filter(item => id === item.id);
    return client;
  }
}