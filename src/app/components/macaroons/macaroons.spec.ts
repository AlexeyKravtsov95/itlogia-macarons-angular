import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Macaroons } from './macaroons';

describe('Macaroons', () => {
  let component: Macaroons;
  let fixture: ComponentFixture<Macaroons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Macaroons],
    }).compileComponents();

    fixture = TestBed.createComponent(Macaroons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
