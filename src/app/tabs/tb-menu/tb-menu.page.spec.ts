import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TbMenuPage } from './tb-menu.page';

describe('TbMenuPage', () => {
  let component: TbMenuPage;
  let fixture: ComponentFixture<TbMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TbMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
