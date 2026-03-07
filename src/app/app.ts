import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { AdvantagesType } from './types/advantages.type';
import { MacaroonsType } from './types/macaroons.type';
import { OrderType } from './types/order.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', './app.adaptive.scss'],
})
export class App {
  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      text:
        'Мы честно готовим макаруны только из натуральных и качественных продуктов. ' +
        'Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      text:
        'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но ' +
        'у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      text:
        'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом ' +
        '82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      text:
        'Вкус, качество и безопасность наших пирогов подтверждена декларацией о ' +
        'соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  public macaroons: MacaroonsType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      count: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      count: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      count: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      count: '1 шт.',
      price: '1,70 руб.',
    },
  ];

  public orderValues: OrderType = {
    productTitle: '',
    namePerson: '',
    phonePerson: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToOrder(macaroon: MacaroonsType, target: HTMLElement): void {
    this.scrollTo(target);
    this.orderValues.productTitle = macaroon.title.toUpperCase();
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
