import { Injectable } from '@angular/core';
declare var gtag: Function;
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }
  public sendEvent(eventName: string, params: any) {
    gtag('event', eventName, params);
  }
}
