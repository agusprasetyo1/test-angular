import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  /* 
  * NO 1 ( DITUKAR, AWALNYA NOMER 2)
  *
  * Structure directive memerlukan sebuah struktur pada template --> <ng-template>
  * sehingga kita memerlukan parameter dengan tipe TemplateRef pada constructor
  * TemplateRef juga membutuhkan generic type. Kali ini kita menggunakan any
  * Structure directive juga memerluka sebuah view untuk meletakkan <ng-template>
  * Oleh karena itu kita memerlukan parameter dengan tipe ViewContainerRef
  */
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  /*  
  * NO 2 ( DITUKAR, AWALNYA NOMER 1)
  * 
  * appUnless tetap merupakan sebuah property
  * INGAT, AGAR STRUCTUR DIRECTIVE DAPAT BEKERJA, 
  * NAMA PROPERTY HARUS SAMA DENGAN SELECTOR
  * 
  * Namun, karena kita menginginkan "sesuatu" berubah ketika 
  * nilai dari appUnless berubah maka kita memerlukkan setter (set)
  * Ingat, appUnless akan melakukan perubahan struktur pada saat kondisi FALSE
  * Jika kondisi true, maka appUnless tidak akan menampilkan apapun
  */
  @Input() set appUnless(condition: boolean) {
    //perubahan pada saat kondisi false
    if (!condition) {
      /*
      * NO 3
      *
      * Menampilkan template DOM
      */
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      /**
       * NO 4
       * 
       * Menghapus template pada DOM
      */
      this.vcRef.clear();
    }
  }
}