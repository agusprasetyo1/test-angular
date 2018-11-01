import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //Untuk menginisialisasi inputan dari cockpit agar dapat diakses oleh class lain untuk diproses {Local References}
  @Output() serverCreated = new EventEmitter <{serverName:string, serverContent:string}>(); 
  @Output('bpCreated') blueprintCreated = new EventEmitter <{blueprintName:string, blueprintContent:string}>(); //Costum
  // newServerName = "";
  // newServerContent = "";
  @ViewChild('serverNameContent') serverNameContent: ElementRef; //Membuat ViewChild

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName : this.newServerName, //Menggunakan ngModel
      serverName : nameInput.value,
      // serverContent: this.newServerContent //Menggunakan ngModel
      // serverContent: contentInput.value //Menggunakan  
      serverContent: this.serverNameContent.nativeElement.value // menggunakan view child
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // blueprintName: this.newServerName, //Menggunakan ngModel
      blueprintName: nameInput.value,
      // blueprintContent: this.newServerContent //Menggunakan ngModel
      blueprintContent: this.serverNameContent.nativeElement.value // menggunakan view child
    })
  }
}
