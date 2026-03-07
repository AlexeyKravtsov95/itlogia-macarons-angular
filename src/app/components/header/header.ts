import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss', './header.adaptive.scss'],
})
export class HeaderComponent {
  public phoneNumber: string = '+375 (29) 368-98-68';

  public openMenu(menuElement: HTMLElement): void {
    menuElement.classList.add('open');
  }

  public closeMenu(menuElement: HTMLElement): void {
    menuElement.classList.remove('open');
  }
}
