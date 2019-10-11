import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PooCardComponent } from './poo-card.component';

describe('PooCardComponent', () => {
  let component: PooCardComponent;
  let fixture: ComponentFixture<PooCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PooCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PooCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
