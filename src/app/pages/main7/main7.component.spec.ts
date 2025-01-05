import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main7Component } from './main7.component';

describe('Main7Component', () => {
  let component: Main7Component;
  let fixture: ComponentFixture<Main7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
