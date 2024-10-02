import { Injectable } from '@angular/core';
import { HxSpinnerComponent } from './hx-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class HxSpinnerService {

  private spinnerComponentRef: HxSpinnerComponent | null = null;

  setSpinnerComponent(spinner: HxSpinnerComponent) {
    this.spinnerComponentRef = spinner
  }

  show() {
    this.spinnerComponentRef?.spinnerShow();
  }

  hide() {
    this.spinnerComponentRef?.spinnerHide();
  }
}
