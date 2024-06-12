import { Routes } from '@angular/router';
import { AppJournalComponent } from './journal.component';
export const JournalRoutes: Routes=[
    {
        path: '',
        component: AppJournalComponent,
        data: {
          title: 'Journal',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Journal' },
          ],
        },
      },
];