import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainModuleComponent } from './main-module.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: "",component:MainModuleComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "products", component: ProductsComponent },
      { path: "payment", component: PaymentMethodComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
