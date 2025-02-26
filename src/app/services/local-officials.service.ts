import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateOfficial } from '../models/state-official.model';
import { STATE_OFFICIALS } from '../data/state-officials.const';

@Injectable({
  providedIn: 'root'
})
export class LocalOfficialsService {
  private currentState = new BehaviorSubject<string>('NY'); // Default to NY
  private officialsData = new BehaviorSubject<StateOfficial | null>(null);

  constructor() {
    // Initialize officials data with default state
    this.updateOfficialsData('NY');
  }

  setState(state: string) {
    this.currentState.next(state);
    this.updateOfficialsData(state);
  }

  getCurrentState(): string {
    return this.currentState.getValue();
  }

  getStateObservable() {
    return this.currentState.asObservable();
  }

  getOfficialsData() {
    return this.officialsData.asObservable();
  }

  getCurrentOfficialsData(): StateOfficial | null {
    return this.officialsData.getValue();
  }

  private updateOfficialsData(stateAbbrev: string) {
    const stateData = STATE_OFFICIALS.find(
      state => state.stateAbbreviation === stateAbbrev
    );

    if (stateData) {
      this.officialsData.next(stateData);
    } else {
      console.error(`No data found for state: ${stateAbbrev}`);
      this.officialsData.next(null);
    }
  }
} 