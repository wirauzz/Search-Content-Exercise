import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SongItemComponent } from './components/song-item/song-item.component';
import { OrderSongsByComponent } from './components/order-songs-by/order-songs-by.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SongListComponent,
    SongItemComponent,
    OrderSongsByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
