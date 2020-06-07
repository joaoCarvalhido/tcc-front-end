import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciamentoAluguelComponent } from './financiamento-aluguel.component';

describe('FinanciamentoAluguelComponent', () => {
  let component: FinanciamentoAluguelComponent;
  let fixture: ComponentFixture<FinanciamentoAluguelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciamentoAluguelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciamentoAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
