import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MsgContainerComponent } from './msg-container/msg-container.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    ContactListComponent,
    MsgContainerComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
