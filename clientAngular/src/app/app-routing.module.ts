import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OldComponent } from './old/old.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AHomeComponent } from './admin/a-home/a-home.component';
import { LoginComponent } from './access/login/login.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'old', component: OldComponent},
  { path: 'aboutme', component: AboutMeComponent},
  { path: 'admin', component: AHomeComponent,
    children: [
      { path: '', pathMatch:'full', redirectTo:'abtme'},
      { path: 'abtme', component: AboutMeComponent},
      { path: 'oldie', component: OldComponent},
  ]},
  { path: 'access', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
