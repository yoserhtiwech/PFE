import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/statistics/dashboard1',
        pathMatch: 'full',
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./pages/dashboards/dashboards.module').then(
            (m) => m.DashboardsModule
          ),
      },
      {
        path: 'configuration',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./pages/forms/forms.module').then((m) => m.FormModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./pages/charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'logs',
        loadChildren: () =>
          import('./pages/apps/apps.module').then((m) => m.AppsModule),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./pages/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./pages/tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'datatable',
        loadChildren: () =>
          import('./pages/datatable/datatable.module').then((m) => m.DatatableModule),
      },
      {
        path: 'theme-pages',
        loadChildren: () =>
          import('./pages/theme-pages/theme-pages.module').then(
            (m) => m.ThemePagesModule
          ),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./pages/invoice/invoice.module').then(
            (m) => m.InvoiceModule
          ),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./pages/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./pages/chat/chat.module').then(
            (m) => m.ChatModule
          ),
      },
      {
        path: 'journal',
        loadChildren: () =>
          import('./pages/journal/journal.module').then(
            (m) => m.journalModule
          ),
      },
      {
        path: 'dialer',
        loadChildren: () =>
          import('./pages/dialer/dialer.module').then(
            (m) => m.DialerModule
          ),
      },
      {
        path: 'network',
        loadChildren: () =>
          import('./pages/Network/network.module').then(
            (m) => m.NetworkModule
          ),
      },
      
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: 'landingpage',
        loadChildren: () =>
          import('./pages/theme-pages/landingpage/landingpage.module').then(
            (m) => m.LandingPageModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
