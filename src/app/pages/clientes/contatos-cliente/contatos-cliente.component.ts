import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NegocioDataService } from '../../../services/negocio-data.service';
import { Historico } from '../../../shared/historico';

@Component({
  selector: 'contatos-cliente',
  templateUrl: './contatos-cliente.component.html',
  styleUrls: ['./contatos-cliente.component.scss'],
  providers: [NegocioDataService]
})
export class ContatosClienteComponent implements OnInit {

  form: FormGroup;
  historico: Historico = new Historico();
  user = {};

  constructor(formBuilder: FormBuilder,
    private router: Router,
    private authService: NbAuthService,
    private negocioDataService: NegocioDataService) {

      this.form = formBuilder.group({
        contactDate: ['', [
          Validators.required
        ]],
        returnDate: ['', [
          Validators.required
        ]],
        totalValue: ['', [
          Validators.required
        ]],
        offeredValue: ['', [
          Validators.required
        ]],
        feedback: ['', [
          Validators.required
        ]],
      });
     }

  ngOnInit() {
  }

  save() {
    var strUser = JSON.stringify(this.user);
    var objUser = JSON.parse(strUser);
    this.historico.employee = objUser.employee;

    alert(JSON.stringify(this.historico));

    this.negocioDataService
      .addDeal(this.historico)
      .subscribe(
        data => this.router.navigate(['#'])
      );
  }

}
