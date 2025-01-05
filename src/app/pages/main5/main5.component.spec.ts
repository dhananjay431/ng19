import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main5Component } from './main5.component';

describe('Main5Component', () => {
  let component: Main5Component;
  let fixture: ComponentFixture<Main5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
