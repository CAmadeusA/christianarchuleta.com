import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimbleComponent } from './nimble.component';

describe('NimbleComponent', () => {
  let component: NimbleComponent;
  let fixture: ComponentFixture<NimbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NimbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
