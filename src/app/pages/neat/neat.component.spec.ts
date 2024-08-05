import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeatComponent } from './neat.component';

describe('NeatComponent', () => {
  let component: NeatComponent;
  let fixture: ComponentFixture<NeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
