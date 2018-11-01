import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
// @Directive({ UNTUK DIRECT DATA LANGUSNG
//    selector: '[changeText]'
// })
export class FormTodoComponent implements OnInit {
  // constructor(Element: ElementRef) { //UNTUK DIRECT DATA LANGSUNG
  //   console.log(Element);
  //   Element.nativeElement.innerText = 'Text is Changed changeText Directive';
  // }

  constructor() {}
  
  ngOnInit() {}
}
