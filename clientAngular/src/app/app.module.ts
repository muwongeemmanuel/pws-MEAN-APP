import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LinksComponent } from './shared/links/links.component';
import { AHomeComponent } from './admin/a-home/a-home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OldComponent } from './old/old.component';
import { OldFooterComponent } from './old/old-footer/old-footer.component';
import { OldHeaderComponent } from './old/old-header/old-header.component';
import { LoginComponent } from './access/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    AHomeComponent,
    AboutMeComponent,
    OldComponent,
    OldFooterComponent,
    OldHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
