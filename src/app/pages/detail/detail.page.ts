import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/misc/Note';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  noteid: string;
  loadedNote: Note;
  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteServiceService
    ) {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has('noteId')){
          return;
      }
      const noteid = paramMap.get('noteId');
      this.noteid = noteid;
      this.loadedNote = this.noteService.getthisNote(noteid);
      });
    }


  ngOnInit() {
  }

  onDelete(id: string){
    this.noteService.deleteNote(id);
  }

}
