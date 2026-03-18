import { Injectable } from '@angular/core';
import { MacaroonsType } from '../types/macaroons.type';

@Injectable()
export class MacaroonsService {
  getMacaroons(): MacaroonsType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        count: '1 шт.',
        price: 1.70,
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        count: '1 шт.',
        price: 1.70,
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        count: '1 шт.',
        price: 1.70,
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        count: '1 шт.',
        price: 1.70,
      },
    ];
  }
}
