import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrl: './buku.component.css'
})
export class BukuComponent {

  simpanBuku(form : NgForm){
    console.log("Pengujian klik")
    console.log();


  }

}
