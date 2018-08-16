import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // why use this method?, simply because accessing the DOM directly like in 
    // basic-highligh directive (this.elementRef.nativeElement.style.backgroundColor = 'yellow';)
    // can be that it doesnt work with service workers
    // and it might create an error
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'teal');
  }

}
