import { Component, OnInit, Input } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NegocioDataService } from '../../../services/negocio-data.service';
import { CustomerService } from '../../../@core/data/customer.service';
import { Negocio } from '../../../shared/negocio';

@Component({
  selector: 'detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.scss'],
  providers: [NegocioDataService]
})
export class DetalheClienteComponent implements OnInit {

  @Input() cliente: Negocio;

  form: FormGroup;
  negocio: Negocio;
  customer = {};

  constructor(
    private fakeService: CustomerService,
    
    private route: ActivatedRoute,

    formBuilder: FormBuilder,
    private router: Router,
    private authService: NbAuthService,
    private negocioDataService: NegocioDataService) {
    
      this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.customer = token.getPayload();
        }
      });

    this.form = formBuilder.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      doc: ['', [
        Validators.required
      ]],
      birthdate: ['', [
        Validators.required
      ]],
      contatado: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]],
      telCel: ['', [
        Validators.required
      ]],
      origem: ['', [
        Validators.required
      ]],
      estado: ['', [
        Validators.required
      ]],
      cidade: ['', [
        Validators.required
      ]],
      situacao: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    this.getClient()
  }

  getClient() {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.user = this.negocioDataService.getDealById(id);
    const result = this.negocioDataService.getDealById(id);
    if (result) {
      result.subscribe(dados => {
        this.negocio = dados;
      });
    } 
  }

  update() {
    var strUser = JSON.stringify(this.customer);
    var objUser = JSON.parse(strUser);
    this.negocio.employee = objUser.employee;

    alert(JSON.stringify(this.negocio));

    this.negocioDataService
      .updateDeal(this.negocio)
      .subscribe(
        data => this.router.navigate(['#'])
      );
  }

  delete() {
    console.log(this.negocio.id);
    this.negocioDataService
    .deleteDealById(this.negocio.id)
    .subscribe(
      data => this.router.navigate([`/pages/clientes/lista`])
    );
  }
}