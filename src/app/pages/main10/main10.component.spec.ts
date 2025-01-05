import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main10Component } from './main10.component';

describe('Main10Component', () => {
  let component: Main10Component;
  let fixture: ComponentFixture<Main10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
