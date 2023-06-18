import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoComidaPage } from './info-comida.page';

describe('InfoComidaPage', () => {
  let component: InfoComidaPage;
  let fixture: ComponentFixture<InfoComidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
