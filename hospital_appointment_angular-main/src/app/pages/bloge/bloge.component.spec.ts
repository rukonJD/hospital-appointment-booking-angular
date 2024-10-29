import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogeComponent } from './bloge.component';

describe('BlogeComponent', () => {
  let component: BlogeComponent;
  let fixture: ComponentFixture<BlogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogeComponent]
    });
    fixture = TestBed.createComponent(BlogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
