import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { TriviaCreateComponent } from './trivia/trivia-create.component';
import { TriviaStartComponent } from './trivia/trivia-start.component';
import { TriviaHomeComponent } from './trivia/trivia-home.component';

const appRoutes: Routes = [
  { path: '', component: TriviaHomeComponent },
  { path: 'create', component: TriviaCreateComponent },
  { path: 'start', component: TriviaStartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TriviaCreateComponent,
    TriviaStartComponent,
    TriviaHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
