/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AuthGuard } from './auth-guard.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
import { NB_AUTH_TOKEN_CLASS, NbAuthJWTToken } from '@nebular/auth';
import { NegocioDataService } from './services/negocio-data.service';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            // baseEndpoint: 'http://wssoft-001-site1.itempurl.com/v1',
            baseEndpoint: 'http://localhost:53768/v1',
            login: {
              endpoint: '/auth/sign-in',
              method: 'post',
            },
            // register: {
            //   endpoint: '/auth/sign-up',
            //   method: 'post',
            // },
            logout: {
              endpoint: '/auth/sign-out',
              method: 'post',
            },
            // requestPass: {
            //   endpoint: '/auth/request-pass',
            //   method: 'post',
            // },
            // resetPass: {
            //   endpoint: '/auth/reset-pass',
            //   method: 'post',
            // },
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
          },
        },
      },
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
    AuthGuard,
    NegocioDataService
  ],
})
export class AppModule {
}
