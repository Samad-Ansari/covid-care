import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { HomeComponent } from './pages/home/home.component';

import { CoronaDataService } from './services/corona-data.service';
import { TabsDataService } from './services/tabs-data.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DataTableComponent,
    JumbotronComponent,
    PageNotFoundComponent,
    TabsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ CoronaDataService, TabsDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
