import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkreportComponent } from './markreport.component';

describe('MarkreportComponent', () => {
  let component: MarkreportComponent;
  let fixture: ComponentFixture<MarkreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
