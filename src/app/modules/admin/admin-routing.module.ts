import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsContainerComponent } from './components/views-container/views-container.component';
import { ViewsPostComponent } from './components/views-post/views-post.component';
import { ViewsTodoComponent } from './components/views-todo/views-todo.component';
import { ViewsUserComponent } from './components/views-user/views-user.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsContainerComponent,
    children: [
      { path: 'post', component: ViewsPostComponent },
      { path: 'user', component: ViewsUserComponent },
      { path: 'todo', component: ViewsTodoComponent },
      { path: '', redirectTo: 'post', pathMatch: 'full' },
      { path: '**', redirectTo: 'post', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
