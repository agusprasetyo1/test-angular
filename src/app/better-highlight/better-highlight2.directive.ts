import { Directive, ElementRef, Renderer2, HostBinding, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight2]'
})
export class BetterHighlight2Directive {
	// Costum Property Binding
	// Jangan lupa Costum Property Binding menggunakan decorator @input()
	@Input() defaultColor: String = 'transparent';
	@Input() highlightColor: String = 'blue';
	@HostBinding('style.backgroundColor') backgroundColor: String;
	@HostBinding('style.color') color: String;
	
	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.defaultColor;
	}

	//Event ketika mouse hover
	@HostListener('mouseenter') mouseover(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.highlightColor;
		this.color = "white";
	}

	//Event ketika mouse tidak lagi hover
	@HostListener('mouseleave') mouseleave(eventData: Event) {
		this.backgroundColor = this.defaultColor;
		this.color = "black";
	}
}
