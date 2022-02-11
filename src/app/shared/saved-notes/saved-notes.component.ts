import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Note } from '../../misc/Note';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.scss'],
})
export class SavedNotesComponent implements OnInit {
  @Input() savedNote: Note;
  // backgrounds: string[] = ['../../../assets/image/nightsky.png',
  //   '../../../assets/image/nightsky2.png','../../../assets/image/nightsky3.png'];
  randomInt = 0;
  constructor() {
  }

  ngOnInit() {
    //this.randomInt = Math.floor(Math.random() * this.backgrounds.length);
  }

  public isNoteModified(): boolean{
    return this.savedNote.dateModified !== undefined;
  }

  public randomBackground(){
    // console.log(this.backgrounds[this.randomInt]);
    // return this.backgrounds[this.randomInt];
  }
}
