import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LinksComponent } from './shared/links/links.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OldComponent } from './old/old.component';
import { OldFooterComponent } from './old/old-footer/old-footer.component';
import { OldHeaderComponent } from './old/old-header/old-header.component';
import { LoginComponent } from './access/login/login.component';
import { ContactComponent } from './admin/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { TmplteComponent } from './tmplte/tmplte.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    AboutMeComponent,
    OldComponent,
    OldFooterComponent,
    OldHeaderComponent,
    LoginComponent,
    ContactComponent,
    AdminComponent,
    TmplteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
