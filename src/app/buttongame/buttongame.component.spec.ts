import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongameComponent } from './buttongame.component';

describe('ButtongameComponent', () => {
  let component: ButtongameComponent;
  let fixture: ComponentFixture<ButtongameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtongameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtongameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
