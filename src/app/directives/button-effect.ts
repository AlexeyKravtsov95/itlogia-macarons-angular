import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[buttonEffect]',
})
export class ButtonEffect implements OnInit {
  @Input() btnEffectDefaultColor: string =
    'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() btnEffectFocusColor: string =
    'linear-gradient(90deg, rgb(73, 2, 14) 0%, rgb(255, 58, 85) 100%)';

  private _bgColor: string = '';
  private _isOnFocus: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.changeElementBgColor(this.btnEffectDefaultColor);
  }

  @HostBinding('style.background-image')
  get bgColor(): string {
    return this._bgColor;
  }

  @HostBinding('class.isOnFocus')
  get isOnFocus(): boolean {
    return this._isOnFocus;
  }


  @HostListener('mouseenter')
  onFocus() {
    this.changeElementBgColor(this.btnEffectFocusColor);
    this._isOnFocus = true;
  }

  @HostListener('mouseleave')
  onBlur() {
    this.changeElementBgColor(this.btnEffectDefaultColor);
    this._isOnFocus = false;
  }

  changeElementBgColor(color: string) {
    this._bgColor = color;
  }
}
