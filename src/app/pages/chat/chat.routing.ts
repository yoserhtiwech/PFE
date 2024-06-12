import { Routes } from '@angular/router';
import { AppChatComponent } from './chat.component';
export const ChatRoutes: Routes=[
    {
        path: '',
        component: AppChatComponent,
        data: {
          title: 'Chat',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Chat' },
          ],
        },
      },
];