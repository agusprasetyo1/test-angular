import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  form;
  dataKelas = ['RPL 1', 'RPL 2', 'RPL 3', 'RPL 4'];
  showTable = false;
  nama: String;
  absen: String;
  kelas: String;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      nama: new FormControl('', [Validators.required, Validators.minLength(5)]),
      absen: new FormControl('', Validators.required),
      kelas: new FormControl('', Validators.required)
    });
  }

  textValidator(control){
    if (control.value.length < 1) {
      return {'absen' : true};
    }
  }

  onSubmit(user) {
    console.log(user);
    this.nama = user.nama;
    this.absen = user.absen;
    this.kelas = user.kelas;
    this.showTable = true;
  }

  onReset(user){
    this.nama = '';
    this.kelas = '';
    this.absen = '';
    user.nama = '';
    user.absen = '';
    user.kelas = '';
    this.showTable = false;
  }

//   FORM VALIDATION 2

  addUser(form){
	console.log(form.value);
  }
}
