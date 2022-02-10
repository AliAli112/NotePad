import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../misc/Note';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.scss'],
})
export class SavedNotesComponent implements OnInit {
  @Input() savedNote: Note;

  constructor() { }

  ngOnInit() {}

}
