import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //Membuat HostBinding
  @HostBinding('style.backgroundColor') backgroundColor:String =  'transparent';
  @HostBinding('style.color') color:String =  'transparent';

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.color = 'black'
  }

  //Event renderer HostListener

  // Event ketika mouse hover
  @HostListener('mouseenter') mouseover(eventData: Event){
    // HostListener
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = "blue"
    this.color = 'white'
  }
  // Event ketika mouse tidak hover
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // HostListener    
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = "transparent";
    this.color = 'black'
  }

}
