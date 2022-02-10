import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyNotesPageRoutingModule } from './my-notes-routing.module';

import { MyNotesPage } from './my-notes.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNotesPageRoutingModule,
    SharedModule,
  ],
  declarations: [MyNotesPage]
})
export class MyNotesPageModule {}
