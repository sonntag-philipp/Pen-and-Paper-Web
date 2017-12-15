import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharEditComponent } from './char-edit.component';

describe('CharEditComponent', () => {
  let component: CharEditComponent;
  let fixture: ComponentFixture<CharEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
