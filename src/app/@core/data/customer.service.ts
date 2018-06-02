import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  data = [{
    id: 1,
    corretor: 'João da Silva',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 2,
    corretor: 'João da Silva',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 3,
    corretor: 'Mariana Gomes',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 4,
    corretor: 'Juliana Moraes',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 5,
    corretor: 'Thatiane Valle',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 6,
    corretor: 'João da Silva',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 7,
    corretor: 'Henrique Aparecido',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 8,
    corretor: 'Willian Alexandre',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 9,
    corretor: 'Suelen Medeiros',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    id: 10,
    corretor: 'Danilo Ribeiro',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }];

  getData() {
    return this.data;
  }
}
