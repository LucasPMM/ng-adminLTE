import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSoldListComponent } from './product-sold-list.component';

describe('ProductSoldListComponent', () => {
  let component: ProductSoldListComponent;
  let fixture: ComponentFixture<ProductSoldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSoldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
