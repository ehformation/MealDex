import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]', // s'utilise comme un attribut : <div appHighlightCard >
})
export class HighlightCardDirective {
  // couleur paramétrable depuis le template (optionnel)
  @Input() appHighlightCard = 'rgba(101, 94, 70, 0.15)';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onEnter(): void {
    this.setStyle(this.appHighlightCard || 'rgba(255,193,7,0.15)', 'scale(1.02)');
  }

  @HostListener('mouseleave') onLeave(): void {
    this.setStyle('transparent', 'scale(1)');
  }

  private setStyle(bg: string, transform: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', bg);
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all .15s ease');
  }
}