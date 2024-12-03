
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [LoginComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have username and password properties', () => {
    expect(component.username).toBe('');
    expect(component.password).toBe('');
  });

  it('should call launchConfetti on form submission', () => {
    spyOn(component, 'launchConfetti');
    component.onSubmit();
    expect(component.launchConfetti).toHaveBeenCalled();
  });

  it('should launch confetti with correct parameters', () => {
    const confettiSpy = spyOn(confetti, 'default' as any);
    component.launchConfetti();
    expect(confettiSpy).toHaveBeenCalledWith({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
});