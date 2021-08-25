import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SongService {

  songUrl:string = 'https://itunes.apple.com/'
  constructor(private Http:HttpClient) { }

  searchSong(text:string):Observable<Song[]>{
    return this.Http.get<Song[]>(`${this.songUrl}search?term=${text}`)
  }
  
}
