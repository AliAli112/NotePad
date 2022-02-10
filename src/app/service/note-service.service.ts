import { Injectable } from '@angular/core';
import { Note } from '../misc/Note';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  Notes: Note[] = [
    new Note('hey', 'hheyyyyy sgfgsfd gsdfhfhd hdhdsh'),
    new Note('hi', 'hh hdhdsh'),
    new Note('yo', 'hheyyyyy sgfgsfd gsdfhfhd hdhdsh')
  ];
  constructor(
    private router: Router
  ) { }

  public getAllNotes(){
    return this.Notes;
  }

  public getthisNote(id: string){
    return { ...this.Notes.find(note => note.id === id)};
  }

  public addNote(note: Note){
    this.Notes.push(note);
  }

  public deleteNote(id: string){
    const index = this.Notes.indexOf(
      this.Notes.find(note => note.id === id));
    this.Notes.splice(index, 1);
    this.router.navigate(['tabs/my-notes']);
  }

  public editNote(id: string, title: string, body: string){
    this.Notes.find(note => note.id === id).title = title;
    this.Notes.find(note => note.id === id).body = body;
    this.router.navigate(['details/' + id]);
  }
}
