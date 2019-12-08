import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IsAuthenticatedGuard } from './shared/guard/is-authenticated.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material.module';
import { CacheService } from './shared/service/cache.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { NgChartjsModule } from 'ng-chartjs';
import { DetailComponent } from './detail/detail.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProvideLoanComponent } from './provide-loan/provide-loan.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DetailComponent,
    TransactionHistoryComponent,
    ProvideLoanComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgChartjsModule.registerPlugin([]),
    NgbModule
  ],
  providers: [IsAuthenticatedGuard, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
