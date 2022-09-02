import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'view', loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
 },
 {path: "", redirectTo: "view",pathMatch:"full"},
 {path: "**", redirectTo: "view",pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
