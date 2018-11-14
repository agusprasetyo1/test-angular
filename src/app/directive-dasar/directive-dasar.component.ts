import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-dasar',
  templateUrl: './directive-dasar.component.html',
  styleUrls: ['./directive-dasar.component.css']
})
export class DirectiveDasarComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd1 = false;
  onlyOdd2 = false;
  onlyOdd3 = false;
  onlyOdd4 = false;
  value = '10';

  constructor() {}

  ngOnInit() {}
}
