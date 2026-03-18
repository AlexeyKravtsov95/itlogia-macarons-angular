import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { CurrencyPipe } from '@angular/common';
import { NumberPhonePipe } from '../../pipes/number-phone-pipe';

@Component({
  selector: 'footer-component',
  imports: [CurrencyPipe, NumberPhonePipe],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss', './footer.adaptive.scss'],
})
export class FooterComponent {
  constructor(public cartService: CartService) {}
  public phoneNumber: string = '375293689868';
  public instagramLink: string = 'https://www.instagram.com/';
}
