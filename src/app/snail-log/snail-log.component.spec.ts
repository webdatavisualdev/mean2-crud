import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnailLogComponent } from './snail-log.component';

describe('SnailLogComponent', () => {
  let component: SnailLogComponent;
  let fixture: ComponentFixture<SnailLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnailLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnailLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
