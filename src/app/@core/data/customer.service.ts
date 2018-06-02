import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  data = [{
    corretor: 'João da Silva',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'João da Silva',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'Mariana Gomes',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'Juliana Moraes',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'Thatiane Valle',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'João da Silva',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'Henrique Aparecido',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'Willian Alexandre',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
    corretor: 'Suelen Medeiros',
    dataCadastro: 'Mark',
    cliente: '10/02/2018',
    cpfCnpj: '999999999-99',
    estado: 'SP',
    cidade: 'São Paulo',
  }, {
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
