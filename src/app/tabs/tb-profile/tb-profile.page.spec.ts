import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TbProfilePage } from './tb-profile.page';

describe('TbProfilePage', () => {
  let component: TbProfilePage;
  let fixture: ComponentFixture<TbProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TbProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
