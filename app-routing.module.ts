import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './src/app/dashboard/dashboard.component';
import { HistoryPageComponent } from './src/app/history-page/history-page.component';
import { UserprofileComponent } from './src/app/userprofile/userprofile.component';


const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full' },
  {path:'dashboard',component:DashboardComponent },
  {path:'history',component:HistoryPageComponent },
  {path:'userprofile',component:UserprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }