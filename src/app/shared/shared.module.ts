import { NgModule } from '@angular/core';
import { SavedNotesComponent } from './saved-notes/saved-notes.component';

@NgModule({
  declarations: [ SavedNotesComponent ],
  exports: [ SavedNotesComponent ]
})
export class SharedModule{}
