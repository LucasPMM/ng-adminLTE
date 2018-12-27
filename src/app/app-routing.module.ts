import { UnauthenticatedGuard } from './guards/unauthenticated/unauthenticated.guard';
import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashComponent } from './parts/dash/dash.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphControlerComponent } from './pages/graph-controler/graph-controler.component';
import { ManagersListComponent } from './pages/managers-list/managers-list.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductSoldListComponent } from './pages/product-sold-list/product-sold-list.component';
import { InstitutionalComponent } from './pages/institutional/institutional.component';
import { ContactComponent } from './pages/contact/contact.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/controler',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: '',
    component: DashComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { component: GraphControlerComponent, path: 'controler' },
      { component: ManagersListComponent, path: 'managers-list' },
      { component: ClientListComponent, path: 'client-list' },
      { component: ProductListComponent, path: 'product-list' },
      { component: ProductSoldListComponent, path: 'product-sold-list' },
      { component: InstitutionalComponent, path: 'institutional' },
      { component: ContactComponent, path: 'contact' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
