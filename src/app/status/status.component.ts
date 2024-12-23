import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {
  currentDate: Date = new Date();
  userAgent = navigator.userAgent;
  language = navigator.language;
  isCookieEnabled = navigator.cookieEnabled;
  logicalProcessors = navigator.hardwareConcurrency;
  maxTouchPoints = navigator.maxTouchPoints;
}
