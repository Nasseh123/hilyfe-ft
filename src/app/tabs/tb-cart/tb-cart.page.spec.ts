import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TbCartPage } from './tb-cart.page';

describe('TbCartPage', () => {
  let component: TbCartPage;
  let fixture: ComponentFixture<TbCartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TbCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
