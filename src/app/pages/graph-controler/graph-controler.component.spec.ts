import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphControlerComponent } from './graph-controler.component';

describe('GraphControlerComponent', () => {
  let component: GraphControlerComponent;
  let fixture: ComponentFixture<GraphControlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphControlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
