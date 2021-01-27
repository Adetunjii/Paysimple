import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './reusables/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ErrorComponent } from './views/error/error.component';
import { PosComponent } from './views/pos/pos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: SidebarComponent },
  { path: 'main', component: DashboardComponent },
  { path: 'pos', component: PosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
