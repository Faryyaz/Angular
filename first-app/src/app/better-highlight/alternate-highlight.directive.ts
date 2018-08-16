import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAlternateHighlight]'
})
export class AlternateHighlightDirective implements OnInit {
@Input() defaultColor: string = 'grey';
@Input() highlightColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string = 'white';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOn(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseRemoved(){
    this.backgroundColor = this.defaultColor;
  }

}
