import {isDevMode, NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './store/example.reducer';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component'
import {FormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {ExampleEffects} from "./store/example.effects";
import {HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({example: fromReducer.reducer}),
    EffectsModule.forRoot([ExampleEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(),
      autoPause: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
