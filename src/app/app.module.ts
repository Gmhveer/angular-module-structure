import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainModuleComponent } from './main-module/main-module.component';
import { SocketIoService } from './services/socket-io.service';
import { ErrorhandlingInterceptor } from './services/errorhandling.interceptor';
import { CommanModule } from './services/comman/comman.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    CommanModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorhandlingInterceptor,
    multi: true
  },
    // SocketIoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
