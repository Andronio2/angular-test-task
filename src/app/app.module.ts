import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/Header.component';
import { MainComponent } from './components/Main/Main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/Card/Card.component';
import { PaginatorComponent } from './components/Paginator/Paginator.component';
import { LoaderComponent } from './components/Loader/Loader.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, CardComponent, PaginatorComponent, LoaderComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
