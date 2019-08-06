import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaPontosPage } from './loja-pontos.page';

describe('LojaPontosPage', () => {
  let component: LojaPontosPage;
  let fixture: ComponentFixture<LojaPontosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaPontosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaPontosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
