import { Component, OnInit } from '@angular/core';
import { Note } from './Model/model';
import { NoteService } from './Services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  newNote: Note = new Note();
  notes: Note[] = [];
  errMessage: string = '';

  constructor(private notesService: NoteService) {}

  ngOnInit() {
    this.fetchNotes();
  }

  fetchNotes() {
    this.notesService.getNotes().subscribe(
      (data) => {
        this.notes = data;
      },
      (error) => {
        this.errMessage = 'Error fetching notes';
      }
    );
  }

  addNote() {
    this.notes.push(this.newNote); 
    this.notesService.addNote(this.newNote).subscribe(
      () => {
        this.newNote = new Note(); 
      },
      (error) => {
        this.errMessage = 'Error adding note';
        
        this.notes.pop();
      }
    );
  }
}
