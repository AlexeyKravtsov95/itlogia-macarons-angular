import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss', './footer.adaptive.scss'],
})
export class FooterComponent {
  public showPresent: boolean = true;
  public phoneNumber: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com/';
}
