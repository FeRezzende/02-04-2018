import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EnderecoService } from './services/endereco.service';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { EnderecoComponent } from './services/endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
