import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandstandComponent } from './grandstand.component';

describe('GrandstandComponent', () => {
  let component: GrandstandComponent;
  let fixture: ComponentFixture<GrandstandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandstandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
