import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MacaroonsType } from '../../types/macaroons.type';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart';
import { ButtonEffect } from '../../directives/button-effect';

@Component({
  selector: 'macaroons-component',
  imports: [CurrencyPipe, ButtonEffect],
  templateUrl: './macaroons.html',
  styleUrl: './macaroons.scss',
})
export class Macaroons {
  @Input() macaroon: MacaroonsType;
  @Output() addToCartEvent: EventEmitter<MacaroonsType> = new EventEmitter<MacaroonsType>();

  constructor(private cartService: CartService) {
    this.macaroon = {
      image: '',
      title: '',
      count: '',
      price: 0,
    };
  }

  addMacaroonToCart() {
    this.cartService.count++;
    this.cartService.getSum(this.macaroon.price);
    this.addToCartEvent.emit(this.macaroon);
  }
}
