import { Routes } from '@angular/router';
import { HomeScreenComponent } from './screen/home/home-screen';
import { SessionComponent } from './screen/session/session.component';
import { AnalyticsScreenComponent } from './screen/analytics/analytics-screen.component';
import { ResultsComponent } from './screen/results/results.component';
import { SetupScreenComponent } from './screen/setup/setup-screen.component';
import { ProgressScreenComponent } from './screen/progress/progress-screen.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'setup',
    component: SetupScreenComponent
  },
  {
    path: 'session',
    component: SessionComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'analytics',
    component: AnalyticsScreenComponent
  },
  {
    path: 'progress',
    component: ProgressScreenComponent
  }
];
