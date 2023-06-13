import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemComponent } from './single-item.component';

describe('SingleItemComponent', () => {
  let component: SingleItemComponent;
  let fixture: ComponentFixture<SingleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
