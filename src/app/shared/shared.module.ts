import { NgModule } from '@angular/core';
import { SavedNotesComponent } from './saved-notes/saved-notes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ SavedNotesComponent ],
  exports: [ SavedNotesComponent ]
})
export class SharedModule{}
