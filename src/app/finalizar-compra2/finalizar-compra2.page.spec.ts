import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCompra2Page } from './finalizar-compra2.page';

describe('FinalizarCompra2Page', () => {
  let component: FinalizarCompra2Page;
  let fixture: ComponentFixture<FinalizarCompra2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarCompra2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarCompra2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
