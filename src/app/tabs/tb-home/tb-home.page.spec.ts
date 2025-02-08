import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TbHomePage } from './tb-home.page';

describe('TbHomePage', () => {
  let component: TbHomePage;
  let fixture: ComponentFixture<TbHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TbHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
