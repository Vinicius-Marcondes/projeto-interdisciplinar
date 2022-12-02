import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditParticipantesComponent } from './add-edit-participantes.component';

describe('AddEditComponent', () => {
  let component: AddEditParticipantesComponent;
  let fixture: ComponentFixture<AddEditParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditParticipantesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
