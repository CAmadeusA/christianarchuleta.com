import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromejumpComponent } from './chromejump.component';

describe('ChromejumpComponent', () => {
  let component: ChromejumpComponent;
  let fixture: ComponentFixture<ChromejumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromejumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromejumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
