import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // dataElement : penginisialisasian yang terdapat di { app }
  // element : penginisialisasian/mengambil data sesuai variabel dan datannya
  
  // @Input('dataElement') element : {type:string, name:string, content:string};
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() {}
}
