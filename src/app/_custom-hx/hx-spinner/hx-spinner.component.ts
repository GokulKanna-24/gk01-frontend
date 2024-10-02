import { CommonModule } from '@angular/common';
import { Component, NgZone, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { HxSpinnerService } from './hx-spinner.service';

@Component({
  selector: 'hx-spinner',
  standalone: true,
  imports: [LottieComponent, CommonModule],
  templateUrl: './hx-spinner.component.html',
  styleUrl: './hx-spinner.component.scss'
})
export class HxSpinnerComponent {

  @ViewChild('hxSpinner', { read: TemplateRef }) spinnerEle!: TemplateRef<any>;

  @ViewChild('parent', { read: ViewContainerRef}) parentEle!: ViewContainerRef;

  options: AnimationOptions = {
    path: 'Animation.json',
  };

  constructor(
    private ngZone: NgZone,
    private spinner: HxSpinnerService
  ) {
    spinner.setSpinnerComponent(this);
  }

  private animatItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
    this.animatItem = animationItem;
  }

  spinnerShow() {
    this.parentEle.clear();
    this.parentEle.createEmbeddedView(this.spinnerEle);
    this.ngZone.runOutsideAngular(() => {
      this.animatItem?.play();
      // this.animatItem?.show();
    })
  }

  spinnerHide() {
    // this.parentEle.createEmbeddedView(this.spinnerEle);
    this.ngZone.runOutsideAngular(() => {
      this.animatItem?.stop();
      this.animatItem?.hide();
    });
    this.parentEle.clear();
  }

  show() {
    this.ngZone.runOutsideAngular(() => {
      this.animatItem?.show();
    })
  }

  hide() {
    this.ngZone.runOutsideAngular(() => {
      this.animatItem?.hide();
    })
  }

  stop() {
    this.ngZone.runOutsideAngular(() => {
      this.animatItem?.stop();
    })
  }

  play() {
    this.ngZone.runOutsideAngular(() => {
      this.animatItem?.play();
    })
  }

  restart() {
    this.ngZone.runOutsideAngular(() => {
      this.animatItem?.stop();
      this.animatItem?.play();
    })
  }

}
