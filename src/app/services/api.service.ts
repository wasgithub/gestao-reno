import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, HttpModule, Response } from '@angular/http';
import { Negocio } from '../shared/negocio';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  public getAllDeals(): Observable<Negocio[]> {
    return this.http
      .get(API_URL + '/deals')
      .map(response => {
        const deals = response.json();
        return deals.map((deal) => new Negocio(deal));
      })
      .catch(this.handleError);
  }

  public createDeal(deal: Negocio): Observable<Negocio> {
    return this.http
      .post(API_URL + '/deals', deal)
      .map(response => {
        return new Negocio(response.json());
      })
      .catch(this.handleError);
  }

  public getDealById(dealId: string): Observable<Negocio> {
    return this.http
      .get(API_URL + '/deals/' + dealId)
      .map(response => {
        return new Negocio(response.json());
      })
      .catch(this.handleError);
  }

  public updateDeal(deal: Negocio): Observable<Negocio> {
    return this.http
      .put(API_URL + '/deals/' + deal.id, deal)
      .map(response => {
        return new Negocio(response.json());
      })
      .catch(this.handleError);
  }

  public deleteDealById(dealId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/deals/' + dealId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
