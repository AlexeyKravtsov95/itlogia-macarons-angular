import { Component } from '@angular/core';
import { NumberPhonePipe } from '../../pipes/number-phone-pipe';

@Component({
  selector: 'header-component',
  imports: [NumberPhonePipe],
  templateUrl: './header.html',
  styleUrls: ['./header.scss', './header.adaptive.scss'],
})
export class HeaderComponent {
  public phoneNumber: string = '375293689868';

  public openMenu(menuElement: HTMLElement): void {
    menuElement.classList.add('open');
  }

  public closeMenu(menuElement: HTMLElement): void {
    menuElement.classList.remove('open');
  }
}
