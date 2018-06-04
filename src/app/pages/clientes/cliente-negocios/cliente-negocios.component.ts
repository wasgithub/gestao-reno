import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NegocioDataService } from '../../../services/negocio-data.service';
import { Negocio } from '../../../shared/negocio';

@Component({
  selector: 'ngx-cliente-negocios',
  styleUrls: ['./cliente-negocios.component.scss'],
  templateUrl: './cliente-negocios.component.html',
  providers: [NegocioDataService]
})
export class ClienteNegociosComponent implements OnInit {

  form: FormGroup;
  negocio: Negocio = new Negocio();
  user = {};
  pattern = '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$';

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private authService: NbAuthService,
    private negocioDataService: NegocioDataService) {
    
      this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
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
  }

  save(form) {
    var strUser = JSON.stringify(this.user);
    var objUser = JSON.parse(strUser);
    this.negocio.employee = objUser.employee;
    console.log(form);
    alert(JSON.stringify(this.negocio));

    this.negocioDataService
      .addDeal(this.negocio)
      .subscribe(
        data => this.router.navigate(['#'])
      );
  }
}
