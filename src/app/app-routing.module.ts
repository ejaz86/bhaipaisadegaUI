import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IsAuthenticatedGuard } from './shared/guard/is-authenticated.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import {ProvideLoanComponent} from './provide-loan/provide-loan.component';
import {PaymentComponent} from './payment/payment.component';


const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'detail', component: DetailComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'transaction-detail', component: TransactionHistoryComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'provide-loan', component: ProvideLoanComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
