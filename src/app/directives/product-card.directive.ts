import { Directive , ElementRef , HostListener , Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {

  @Input() BGColor: string = 'black';

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.boxShadow='6px 6px 12px rgba(0, 0, 0, 0.3)';
    this.element.nativeElement.style.borderRadius= '25px';
    
  }
  ngOnChanges():void{
    this.element.nativeElement.style.backgroundColor = this.BGColor;
  }

  @HostListener('mouseover') enter() {
    this.element.nativeElement.style.boxShadow='8px 8px 15px rgba(0, 0, 0, 0.8)';
  }

  @HostListener('mouseleave') out() {
    this.element.nativeElement.style.boxShadow='5px 5px 10px rgba(0, 0, 0, 0.5)';
  }

  

}

