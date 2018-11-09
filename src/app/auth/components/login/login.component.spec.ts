import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LoginComponent } from './login.component';
import { TestingModule } from 'src/app/testing/testing.module';

describe('LoginComponent', () => {
  let authService;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientModule,
        TestingModule,
        ReactiveFormsModule ],
      providers: [
        {provide: Router, useValue: mockRouter},
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test initial value of property errorMessage
  it('errorMessage property should contain empty string', () => {
    fixture.detectChanges();
    expect(component.errorMessage).toEqual('');
  });

  // Test initial value of property user
  it('user property should contain {email: \'\', passwd: \'\' }', () => {
    fixture.detectChanges();
    expect(component.user).toEqual({email: '', passwd: ''});
  });

  // Test initial value of property isRegistered
  it('isRegistered property should be true', () => {
    fixture.detectChanges();
    expect(component.isRegistered).toEqual(true);
  });

  // Test button to register
  it('should not show registration button', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).not.toContain('Registreren');
  });
  it('should show registration button', () => {
    fixture.detectChanges();
    component.isRegistered = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Registreren');
  });

  // Test initialization of loginForm
  it('should create loginForm as a FormGroup', () => {
    fixture.detectChanges();
    expect(component.loginForm instanceof FormGroup).toBeTruthy();
    expect(component.loginForm.get('email') instanceof FormControl);
  });

  // Test initialization of email
  it('should create email as FormControl', () => {
    fixture.detectChanges();
    expect(component.loginForm.get('email') instanceof FormControl);
  });

   // Test initialization of passwd
   it('should create passwd as FormControl', () => {
    fixture.detectChanges();
    expect(component.loginForm.get('passwd') instanceof FormControl);
  });

  // Test initial validity of loginForm
  it('loginForm should be invalid when empty', () => {
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalsy();
  });

  // Test initial validity of email
  it('email should be invalid when empty', () => {
    fixture.detectChanges();
    expect(component.loginForm.get('email').valid).toBeFalsy();
  });

  // Test initial validity of passwd
  it('passwd should be invalid when empty', () => {
    fixture.detectChanges();
    expect(component.loginForm.get('passwd').valid).toBeFalsy();
  });

  // Test required validator of email
  it('email should have required error when empty, but touched', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.markAsTouched();
    expect(email.errors['required']).toBeTruthy();
  });

  // Test error message for required validator of email
  it('<span> should contain \'Email is verplicht\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.markAsTouched();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Email is verplicht');
  });

  // Test required validator of email
  it('email should not have required error when value is \'test\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.setValue('test');
    expect(email.errors['required']).toBeFalsy();
  });

  // Test error message for required validator of email
  it('<span> should not contain \'Email is verplicht\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.markAsTouched();
    email.setValue('test');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).not.toContain('Email is verplicht');
  });

  // Test email validator of email
  it('email should have email error when value is \'test\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.setValue('test');
    expect(email.errors['email']).toBeTruthy();
  });

  // Test error message for email validator of email
  it('<span> should contain \'Geef een correcte email aub\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.markAsTouched();
    email.setValue('test');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Geef een correcte email aub');
  });

  // Test email validator of email
  it('email should not have error when value is \'test@test.be\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.setValue('test@test.be');
    expect(email.errors).toBeNull();
  });

  // Test error message for required validator of email
  it('<span> should be null when email value is \'test@test.be\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.markAsTouched();
    email.setValue('test@test.be');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span')).toBeNull();
  });

  // Test required validator of passwd
  it('passwd should have required error when empty, but touched', () => {
    fixture.detectChanges();
    const passwd = component.loginForm.get('passwd');
    passwd.markAsTouched();
    expect(passwd.errors['required']).toBeTruthy();
  });

  // Test error message for required validator of passwd
  it('<span> should contain \'Paswoord is verplicht\'', () => {
    fixture.detectChanges();
    const passwd = component.loginForm.get('passwd');
    passwd.markAsTouched();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Paswoord is verplicht');
  });

  // Test required validator of passwd
  it('passwd should not have error when value is \'test\'', () => {
    fixture.detectChanges();
    const passwd = component.loginForm.get('passwd');
    passwd.setValue('test');
    expect(passwd.errors).toBeNull();
  });

  // Test error message for required validator of passwd
  it('<span> should be null', () => {
    fixture.detectChanges();
    const passwd = component.loginForm.get('passwd');
    passwd.markAsTouched();
    passwd.setValue('test');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span')).toBeNull();
  });

  // Test validity of email
  it('email should be valid when value is \'test@test.be\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    email.setValue('test@test.be');
    expect(email.valid).toBeTruthy();
  });

  // Test validity of passwd
  it('passwd should be valid when value is \'test\'', () => {
    fixture.detectChanges();
    const passwd = component.loginForm.get('passwd');
    passwd.setValue('test');
    expect(passwd.valid).toBeTruthy();
  });

  // Test validity of loginForm
  it('email should be valid when value is \'test@test.be\'', () => {
    fixture.detectChanges();
    const email = component.loginForm.get('email');
    const passwd = component.loginForm.get('passwd');
    email.setValue('test@test.be');
    passwd.setValue('test');
    expect(component.loginForm.valid).toBeTruthy();
  });

  // Test value of user.email on form submit
  it('submitting the form should set user.mail to the test value', async(() => {
    fixture.detectChanges();
    spyOn(authService, 'login').and.returnValue(Promise.resolve(''));
    const email = component.loginForm.get('email');
    const passwd = component.loginForm.get('passwd');
    email.setValue('test@test.be');
    passwd.setValue('test');
    component.onSubmit();
    fixture.whenStable().then(() => {
      expect(component.user.email).toEqual('test@test.be');
    });
  }));

  // Test router navigation on successful login
  it('router navigate should be called with [\'/lijst\'] on successful login', async(() => {
    fixture.detectChanges();
    spyOn(authService, 'login').and.returnValue(Promise.resolve(''));
    const email = component.loginForm.get('email');
    const passwd = component.loginForm.get('passwd');
    email.setValue('test@test.be');
    passwd.setValue('test');
    component.onSubmit();
    fixture.whenStable().then(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/lijst']);
    });
  }));

  // Test errormessage property on successful login
  it('errorMessage property should contain empty string on successful login', async(() => {
    fixture.detectChanges();
    spyOn(authService, 'login').and.returnValue(Promise.resolve(''));
    const email = component.loginForm.get('email');
    const passwd = component.loginForm.get('passwd');
    email.setValue('test@test.be');
    passwd.setValue('test');
    component.onSubmit();
    fixture.whenStable().then(() => {
      expect(component.errorMessage).toEqual('');
    });
  }));

  // Test errormessage property on invalid email
  it('errorMessage property should contain \'De gegeven email is niet geldig.\'', async(() => {
    fixture.detectChanges();
    spyOn(authService, 'login').and.returnValue(Promise.resolve('emailInvalid'));
    const email = component.loginForm.get('email');
    const passwd = component.loginForm.get('passwd');
    email.setValue('test@test.be');
    passwd.setValue('test');
    component.onSubmit();
    fixture.whenStable().then(() => {
      expect(component.errorMessage).toEqual('De gegeven email is niet geldig.');
    });
  }));

  // Test error message on invalid email
  it('<p> should contain \'De gegeven email is niet geldig.\'', async(() => {
    fixture.detectChanges();
    spyOn(authService, 'login').and.returnValue(Promise.resolve('emailInvalid'));
    const email = component.loginForm.get('email');
    const passwd = component.loginForm.get('passwd');
    email.setValue('test@test.be');
    passwd.setValue('test');
    component.onSubmit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('De gegeven email is niet geldig.');
    });
  }));

  // TODO: De laatste 2 testen ook voor de 3 andere mogelijke errors

});

// Mock services
class MockRouter { }
