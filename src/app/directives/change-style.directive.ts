import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.color = 'blue';
   }

}
