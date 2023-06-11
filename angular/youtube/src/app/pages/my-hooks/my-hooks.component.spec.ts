import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHooksComponent } from './my-hooks.component';

describe('MyHooksComponent', () => {
  let component: MyHooksComponent;
  let fixture: ComponentFixture<MyHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
