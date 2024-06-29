import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainModuleComponent } from './main-module.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ProductsComponent } from './products/products.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    MainModuleComponent,
    ComponentAComponent,
    ComponentBComponent,
    ProductsComponent,
    PaymentMethodComponent,
  ],
  imports: [
    CommonModule,
    NgxPayPalModule,
    SharedModuleModule,
    MainModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModuleModule { }
