import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAccesComponent } from './b-acces.component';

describe('BAccesComponent', () => {
  let component: BAccesComponent;
  let fixture: ComponentFixture<BAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BAccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
