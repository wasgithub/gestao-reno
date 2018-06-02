import { Component, OnInit, Input } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NegocioDataService } from '../../../services/negocio-data.service';
import { Negocio } from '../../../shared/negocio';

@Component({
  selector: 'detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.scss'],
  providers: [NegocioDataService]
})
export class DetalheClienteComponent implements OnInit {

  @Input() hero: Negocio;

  form: FormGroup;
  negocio: Negocio = new Negocio();
  user = {};

  constructor(
    private route: ActivatedRoute,

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
    this.getClient()
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.negocioDataService.getDealById(id)

      .subscribe(hero => this.hero = hero);
      console.log(id);

  }

  save() {
    var strUser = JSON.stringify(this.user);
    var objUser = JSON.parse(strUser);
    this.negocio.employee = objUser.employee;

    alert(JSON.stringify(this.negocio));

    this.negocioDataService
      .addDeal(this.negocio)
      .subscribe(
        data => this.router.navigate(['#'])
      );
  }
}