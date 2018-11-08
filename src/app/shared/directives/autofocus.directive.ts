import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private ref: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const element = this.renderer.selectRootElement(this.ref.nativeElement);
    element.focus();
  }

}
