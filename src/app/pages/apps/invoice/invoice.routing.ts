/* import { Routes } from '@angular/router';

import { AppInvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AppAddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { AppInvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';

export const InvoiceRoutes:Routes=[
    {
        path:'',
        children:[ 
            {
                path: 'invoice',
                component: AppInvoiceListComponent,
                data: {
                  title: 'Invoice',
                  urls: [
                    { title: 'Dashboard', url: '/dashboards/dashboard1' },
                    { title: 'Invoice' },
                  ],
                },
              },
              {
                path: 'addInvoice',
                component: AppAddInvoiceComponent,
                data: {
                  title: 'Add Invoice',
                  urls: [
                    { title: 'Dashboard', url: '/dashboards/dashboard1' },
                    { title: 'Add Invoice' },
                  ],
                },
              },
              {
                path: 'viewInvoice/:id',
                component: AppInvoiceViewComponent,
                data: {
                  title: 'View Invoice',
                  urls: [
                    { title: 'Dashboard', url: '/dashboards/dashboard1' },
                    { title: 'View Invoice' },
                  ],
                },
              },
              {
                path: 'editinvoice/:id',
                component: AppEditInvoiceComponent,
                data: {
                  title: 'Edit Invoice',
                  urls: [
                    { title: 'Dashboard', url: '/dashboards/dashboard1' },
                    { title: 'Edit Invoice' },
                  ],
                },
              }, 

        ],
  },
] */