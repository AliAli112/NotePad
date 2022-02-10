import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/misc/Note';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {
  loadedNote: Note;
  noteid: string;
  notetitle: string;
  notebody: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteServiceService,
    private router: Router
  ){
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('noteId')){
        console.log(paramMap);
        return;
    }
      const noteid = paramMap.get('noteId');
      console.log(noteid);
      this.noteid = noteid;
      this.loadedNote = this.noteService.getthisNote(noteid);
      this.notetitle = this.loadedNote.title;
      this.notebody = this.loadedNote.body;
    });
  }

  ngOnInit() {}

  public onCancel(){
    this.router.navigate(['details/' + this.noteid]);
  }

  public canBeEdited(): boolean{
    return this.noteisNotEmpty();
  }

  public onSave(){
    this.noteService.editNote(this.loadedNote.id,
        this.notetitle, this.notebody);
  }

  public noteisNotEmpty(){
    return (this.notetitle !== '' && this.notebody !== '') &&
    (this.notetitle !== undefined && this.notebody !== undefined);
  }

}
