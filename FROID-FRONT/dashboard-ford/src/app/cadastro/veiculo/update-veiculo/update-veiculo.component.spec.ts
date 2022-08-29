import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVeiculoComponent } from './update-veiculo.component';

describe('UpdateVeiculoComponent', () => {
  let component: UpdateVeiculoComponent;
  let fixture: ComponentFixture<UpdateVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
