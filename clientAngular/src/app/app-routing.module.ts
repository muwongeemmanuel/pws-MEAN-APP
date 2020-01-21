import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OldComponent } from './old/old.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './access/login/login.component';
import { ContactComponent } from './admin/contact/contact.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'old', component: OldComponent},
  { path: 'aboutme', component: AboutMeComponent},
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', pathMatch:'full', redirectTo:'abtme'},
      { path: 'abtme', component: AboutMeComponent},
      { path: 'oldie', component: OldComponent},
      { path: 'contact', component: ContactComponent},
  ]},
  { path: 'access', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
