import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopier]'
})
export class CopierDirective {
  @Input('appCopier') appCopier: string = '';

  private libelleOriginal: string = '';
  private loading: boolean = false;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
  }

  @HostListener('click') onClick() : void {
    if (this.loading) return;
    navigator.clipboard.writeText(this.appCopier).then(() => this.retourVisuel());
  }

  private retourVisuel() : void {
    this.libelleOriginal = this.el.nativeElement.innerText;
    this.loading = true;

    this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Copié !');
    this.renderer.addClass(this.el.nativeElement, 'btn-success');

    setTimeout(() => {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.libelleOriginal);
      this.renderer.removeClass(this.el.nativeElement, 'btn-success');
      this.loading = false;
    }, 2000);
  }
}
