import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { MacaroonsType } from './types/macaroons.type';
import { OrderType } from './types/order.type';
import { FormsModule } from '@angular/forms';
import { MacaroonsService } from './services/macaroons';
import { CartService } from './services/cart';
import { Advantages } from './components/advantages/advantages';
import { Macaroons } from './components/macaroons/macaroons';
import { ButtonEffect } from './directives/button-effect';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, FormsModule, Advantages, Macaroons, ButtonEffect],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', './app.adaptive.scss'],
  providers: [MacaroonsService],
})
export class App implements OnInit {
  constructor(private macaroonsService: MacaroonsService) {}

  public macaroons: MacaroonsType[] = [];

  public orderValues: OrderType = {
    productTitle: '',
    namePerson: '',
    phonePerson: '',
  };

  ngOnInit() {
    this.macaroons = this.macaroonsService.getMacaroons();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToOrder(macaroon: MacaroonsType, target: HTMLElement): void {
    this.scrollTo(target);
    this.orderValues.productTitle = macaroon.title.toUpperCase();
    alert(`${macaroon.title} добавлен в корзину`);
  }

  public createOrder(): void {
    if (!this.orderValues.productTitle) {
      alert('Заполните выбор');
      return;
    }

    if (!this.orderValues.namePerson) {
      alert('Заполните имя');
      return;
    }

    if (!this.orderValues.phonePerson) {
      alert('Заполните телефон');
      return;
    }

    alert('Спасибо за заказ');

    this.orderValues = {
      productTitle: '',
      namePerson: '',
      phonePerson: '',
    };
  }
}
