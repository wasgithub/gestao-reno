import { Injectable } from '@angular/core';
import { Negocio } from '../shared/negocio';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class NegocioDataService {

  constructor(private api: ApiService) { }

  // Simulate POST /deals
  addDeal(deal: Negocio): Observable<Negocio> {
    return this.api.createDeal(deal);
  }

  // Simulate DELETE /deals/:id
  deleteDealById(dealId: string): Observable<Negocio> {
    return this.api.deleteDealById(dealId);
  }

  // Simulate PUT /deals/:id
  updateDeal(deal: Negocio): Observable<Negocio> {
    return this.api.updateDeal(deal);
  }

  // Simulate GET /deals
  getAllDeals(): Observable<Negocio[]> {
    return this.api.getAllDeals();
  }

  // Simulate GET /deals/:id
  getDealById(dealId: string): Observable<Negocio> {
    return this.api.getDealById(dealId);
  }
}
