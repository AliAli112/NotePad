import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/misc/Note';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.page.html',
  styleUrls: ['./create-note.page.scss'],
})
export class CreateNotePage implements OnInit {
  notetitle: string;
  notebody: string;
  constructor(
    private alrtctrl: AlertController,
    public navCtrl: NavController,
    private router: Router,
    private noteservice: NoteServiceService,
  ) {   }

  ngOnInit() {
  }

  public onSave(){
    const newNote = new Note(this.notetitle, this.notebody);
    this.noteservice.addNote(newNote);
    this.resetPage();
  }

  public onDelete(){
    if(this.notetitle === undefined || this.notetitle === ''){
      this.showAlert('There is nothing to delete.');
    }else{
      this.resetPage();
      this.router.navigateByUrl('/');
    }
  }

  public canBeSaved(): boolean{
    return this.noteisEmpty();
  }

  public async showAlert(message: string){
    const alert = await this.alrtctrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('/');
          }
        }
        ]
    });
    await alert.present();
  }

  public noteisEmpty(){
    return (this.notetitle !== '' && this.notebody !== '') &&
    (this.notetitle !== undefined && this.notebody !== undefined);
  }

  public resetPage(){
    this.notebody = '';
    this.notetitle = '';
  }
}
