import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDirectiveComponent } from './my-directive.component';

describe('MyDirectiveComponent', () => {
  let component: MyDirectiveComponent;
  let fixture: ComponentFixture<MyDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
