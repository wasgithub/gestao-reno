import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class CustomerService {

  data = [{
    id: 1,
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
    origin: 'Em negociação'
  }, {
    id: 2,
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
    origin: 'Em negociação'
  }, {
    id: 3,
    employee: 'Mariana Gomes',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação'
  }, {
    id: 4,
    employee: 'Juliana Moraes',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação'
  }, {
    id: 5,
    employee: 'Thatiane Valle',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação'
  }, {
    id: 6,
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
    origin: 'Em negociação'
  }, {
    id: 7,
    employee: 'Henrique Aparecido',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação'
  }, {
    id: 8,
    employee: 'Willian Alexandre',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação'
  }, {
    id: 9,
    employee: 'Suelen Medeiros',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação'
  }, {
    id: 10,
    employee: 'Danilo Ribeiro',
    name: 'Mark',
    birthdate: '10/02/2018',
    document: '999999999-99',
    state: 'SP',
    city: 'São Paulo',
    email:'email@email.com.br',
    phone: '99999999',
    contacted: 'Não',
    situation: 'Regular',
    origin: 'Em negociação'
  }];

  getData() {
    return this.data;
  }

  getDataByID(id: number) {
    var client = this.data.filter(item => id === item.id);
    return client;
  }
}