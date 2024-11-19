import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  privateurl : string ="http://localhost:3000";

  constructor(private http : HttpClient) { }

  addBuku(judul : string, penulis : string, genres :string[]){
    const buku : Buku= {
      _id : null,
      judul : judul,
      penulis : penulis,
      genre : genres
    }

    this.http
    .post<{message : string}>(this.url,buku);
  }
}
