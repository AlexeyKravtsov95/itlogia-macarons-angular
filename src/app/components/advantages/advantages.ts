import { Component, OnInit } from '@angular/core';
import { AdvantagesType } from '../../types/advantages.type';
import { AdvantagesService } from '../../services/advantages';
import { ShortTextPipe } from '../../pipes/short-text-pipe';

@Component({
  selector: 'advantages-component',
  imports: [ShortTextPipe],
  templateUrl: './advantages.html',
  styleUrl: './advantages.scss',
  providers: [AdvantagesService],
})
export class Advantages implements OnInit {
  constructor(private advantagesService: AdvantagesService) {}
  public advantages: AdvantagesType[] = [];

  ngOnInit() {
    this.advantages = this.advantagesService.getAdvantages();
  }
}
