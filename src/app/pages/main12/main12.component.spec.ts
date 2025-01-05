import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main12Component } from './main12.component';

describe('Main12Component', () => {
  let component: Main12Component;
  let fixture: ComponentFixture<Main12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
