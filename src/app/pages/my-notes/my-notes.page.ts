import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/misc/Note';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.page.html',
  styleUrls: ['./my-notes.page.scss'],
})
export class MyNotesPage implements OnInit {
  notes: Note[] = [];
  constructor(
    private noteservice: NoteServiceService
  ) {
      this.notes = this.noteservice.getAllNotes();
    }

  ngOnInit() {
  }

  isNotesEmpty(): boolean{
    return this.notes.length === 0;
  }

}
