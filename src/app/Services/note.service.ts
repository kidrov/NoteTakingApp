import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../Model/model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private api = 'http://localhost:3000/notes';

  constructor(private httpsvc: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.httpsvc.get<Note[]>(this.api);
  }

  addNote(note: Note): Observable<Note> {
    return this.httpsvc.post<Note>(this.api, note);
  }
}
