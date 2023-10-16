import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { MergemapComponent } from './rxjs/mergemap/mergemap.component';
import { SwitchmapComponent } from './rxjs/switchmap/switchmap.component';
import { ForkjoinComponent } from './rxjs/forkjoin/forkjoin.component';
@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenComponent,
    MergemapComponent,
    SwitchmapComponent,
    ForkjoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
