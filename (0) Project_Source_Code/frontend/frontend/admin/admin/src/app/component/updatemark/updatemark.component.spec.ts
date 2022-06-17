import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemarkComponent } from './updatemark.component';

describe('UpdatemarkComponent', () => {
  let component: UpdatemarkComponent;
  let fixture: ComponentFixture<UpdatemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
