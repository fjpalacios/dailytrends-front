import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { HtmlPipe } from './pipes/html.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FeedComponent } from './components/feed/feed.component';
import { EditComponent } from './components/feed/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './components/feed/create/create.component';
import { ElMundoComponent } from './components/feed/el-mundo/el-mundo.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedsComponent,
    HtmlPipe,
    SummarizePipe,
    FeedComponent,
    EditComponent,
    CreateComponent,
    ElMundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
