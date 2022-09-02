import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewsContainerComponent } from './components/views-container/views-container.component';
import { ViewsSidePanelComponent } from './components/views-side-panel/views-side-panel.component';
import { ViewsNavbarComponent } from './components/views-navbar/views-navbar.component';
import { ViewsUserComponent } from './components/views-user/views-user.component';
import { ViewsPostComponent } from './components/views-post/views-post.component';
import { ViewsTodoComponent } from './components/views-todo/views-todo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViewsContainerComponent,
    ViewsSidePanelComponent,
    ViewsNavbarComponent,
    ViewsUserComponent,
    ViewsPostComponent,
    ViewsTodoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
