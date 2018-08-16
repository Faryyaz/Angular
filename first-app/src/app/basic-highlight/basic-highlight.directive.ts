import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        // not a good practice to access element like this, use renderer instead
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }

}