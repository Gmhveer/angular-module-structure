import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ], exports: [HeaderComponent]
})
export class SharedModuleModule { }
