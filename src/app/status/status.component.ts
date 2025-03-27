import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  currentDate: Date = new Date();
  userAgent = navigator.userAgent;
  language: string = navigator.language;
  isCookieEnabled: boolean = navigator.cookieEnabled;
  logicalProcessors: number = navigator.hardwareConcurrency || 0;
  maxTouchPoints: number = navigator.maxTouchPoints || 0;
}
