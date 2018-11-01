import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percobaan',
  templateUrl: './percobaan.component.html',
  styleUrls: ['./percobaan.component.css']
})
export class PercobaanComponent implements OnInit {
  bulan = [
    'januari',
    'pebruari',
    'maret',
    'april',
    'mei',
    'juni',
    'juli',
    'agustus',
    'september',
    'oktober',
    'nopember',
    'desember'
  ]; //Untuk select option

  isValidation = false; //Untuk tombol validation
  title = 'Ini judul';
  todayDate = new Date();
  jsonval = {
    name: 'melkan',
    age: 20,
    address: { a1: 'Pliwetan', a2: 'Gesikharjo' }
  };

  number = [6, 7, 5, 1, 9, 3, 2];

  chooseMonth(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    alert((<HTMLInputElement>event.target).value);
  }

  onClick() {
    this.isValidation = true;
  }

  constructor() {}

  ngOnInit() {}
}
