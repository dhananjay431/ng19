import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main8Component } from './main8.component';

describe('Main8Component', () => {
  let component: Main8Component;
  let fixture: ComponentFixture<Main8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
