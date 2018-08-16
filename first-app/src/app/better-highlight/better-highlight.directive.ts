import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

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

  // reacting to user events we use the @HostListener decorator
  // official even as parameter i.e. mouseleave and mouseenter
  @HostListener('mouseenter') MSFIDOSignatureAssertion(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#c4c4c4');
  }
  
  @HostListener('mouseleave') mouseRemoved(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'teal');
  }

}
