import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getFormControlError(frmGroup: FormGroup, controlName: string, isFormSubmited: boolean, label?: string): string {
    let frmControls = frmGroup.controls as any;
    if (frmControls[controlName].invalid && (isFormSubmited || frmControls[controlName].dirty || frmControls[controlName].touched)) {
      if (frmControls[controlName].errors?.['required']) {
        return `${label ? label : controlName[0].toUpperCase() + controlName.substring(1).toLowerCase()} is required.`;
      }
      else if (frmControls[controlName].errors?.['email']) {
        return `Incorrect ${label ? label : controlName.toLowerCase()} format.`;
      }
    }
    return '';
  }

  convertMessage(code: string): string {
    switch (code) {
      case 'auth/invalid-credential': 
        return 'Invalid email or password';
      case 'auth/too-many-requests':
          return 'The number of requests exceeds the maximum allowed.';
      case 'auth/invalid-email':
        return 'Invalid email address. Please double-check the email format and try again.';
      case 'auth/user-disabled':
        return 'This user account has been disabled. Please contact support for further assistance.';
      case 'auth/user-not-found':
        return 'User not found. Please verify the email or sign up for a new account.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please verify your password and try again.';
      case 'auth/email-already-in-use':
        return 'The email address is already in use. If it belongs to you, try signing in or use a different email.';
      case 'auth/weak-password':
        return 'The password is too weak. Choose a stronger password with a mix of letters, numbers, and symbols.';
      case 'auth/operation-not-allowed':
        return 'This operation is not allowed. Please contact support for assistance.';
      case 'auth/timeout':
        return 'The operation timed out. Please try again.';
      case 'auth/invalid-action-code':
        return 'The action code is invalid or expired. Please request a new one.';
      case 'auth/invalid-verification-code':
        return 'The verification code is invalid. Please double-check the code.';
      case 'auth/invalid-continue-uri':
        return 'The continue URL provided in the request is invalid. Please check the URL.';
      case 'auth/missing-continue-uri':
        return 'The continue URL is required for password recovery. Please provide a valid URL.';
      default:
        return `Something went wrong.`;
    }
  }

}
