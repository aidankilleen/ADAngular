import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormatText]'
})
export class FormatTextDirective {

  value: string ="";
  @Input() appFormatText: string = "lowercase";

  constructor(private element: ElementRef) { 
    console.log("Format Text Directive started...");
  }

  @HostListener('focus') onFocus() {
    console.log(`focus event called... ${this.appFormatText} .`);
    let value = this.element.nativeElement.value;
  }

  @HostListener('blur') onBlur() {
    this.value = this.element.nativeElement.value;

    if (this.appFormatText == "uppercase") {
      this.element.nativeElement.value = this.value.toUpperCase();

    } else {
      this.element.nativeElement.value = this.value.toLowerCase();
    }
  }
}
