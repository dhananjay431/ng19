import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main9Component } from './main9.component';

describe('Main9Component', () => {
  let component: Main9Component;
  let fixture: ComponentFixture<Main9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
