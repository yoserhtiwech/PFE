import { NavItem } from '../../vertical/sidebar/nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Activity',
    iconName: 'activity',
    route: 'activity',},
  {
    displayName: 'statistics',
    iconName: 'chart-infographic',
    route: 'statistics',
    children: [
      {
        displayName: 'Analytical',
        iconName: 'point',
        route: 'statistics/dashboard1',
      },
      {
        displayName: 'eCommerce',
        iconName: 'point',
        route: 'statistics/dashboard2',
      },
    ],
  },
  {
    displayName: 'Logs',
    iconName: 'phone',
    route: 'logs',
    ddType: '',
    children: [
      /* {
        displayName: 'Chat',
        iconName: 'point',
        route: 'logs/chat',
      },
      {
        displayName: 'Calendar',
        iconName: 'point',
        route: 'logs/calendar',
      },
      {
        displayName: 'Email',
        iconName: 'point',
        route: 'logs/email/inbox',
      },
      {
        displayName: 'Network',
        iconName: 'point',
        route: 'logs/network',
      },
      {
        displayName: 'Dialer',
        iconName: 'point',
        route: 'logs/diale',
      }, */
     /*  {
        displayName: 'Employee',
        iconName: 'point',
        route: 'logs/employee',
      }, */
      /* {
        displayName: 'Notes',
        iconName: 'point',
        route: 'logs/notes',
      },
      {
        displayName: 'Tickets',
        iconName: 'point',
        route: 'logs/tickets',
      },
     
      {
        displayName: 'ToDo',
        iconName: 'point',
        route: 'logs/todo',
      },
      {
        displayName: 'Taskboard',
        iconName: 'point',
        route: 'logs/taskboard',
      },
      {
        displayName: 'Blog',
        iconName: 'point',
        route: 'logs/blog',
        children: [
          {
            displayName: 'Post',
            iconName: 'point',
            route: 'logs/blog/post',
          },
          {
            displayName: 'Detail',
            iconName: 'point',
            route: 'logs/blog/detail/Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
          },
        ],
      }, */
      {
        displayName: 'Call-journal',
        iconName: 'point',
        route: 'logs/call-journal',
      },
      {
        displayName: 'SMS-journal',
        iconName: 'point',
        route: 'logs/sms-journal',
      },
    ],
  },
  {
    displayName: 'Configuration',
    iconName: 'components',
    route: 'configuration',
    ddType: '',
    children: [
      {
        displayName: 'Number',
        iconName: 'point',
        route: 'configuration/number',
      },
      {
        displayName: 'Roles',
        iconName: 'point',
        route: 'configuration/role',
      },
      {
        displayName: 'Employes',
        iconName: 'point',
        route: 'configuration/employes',
      },
      {
        displayName: 'Badge',
        iconName: 'point',
        route: 'configuration/badge',
      },
      {
        displayName: 'Expansion Panel',
        iconName: 'point',
        route: 'configuration/expansion',
      },
      {
        displayName: 'Chips',
        iconName: 'point',
        route: 'configuration/chips',
      },
      {
        displayName: 'Dialog',
        iconName: 'point',
        route: 'configuration/dialog',
      },
      {
        displayName: 'Lists',
        iconName: 'point',
        route: 'configuration/lists',
      },
      {
        displayName: 'Divider',
        iconName: 'point',
        route: 'configuration/divider',
      },
      {
        displayName: 'Menu',
        iconName: 'point',
        route: 'configuration/menu',
      },
      {
        displayName: 'Paginator',
        iconName: 'point',
        route: 'configuration/paginator',
      },
      {
        displayName: 'Progress Bar',
        iconName: 'point',
        route: 'configuration/progress',
      },
      {
        displayName: 'Progress Spinner',
        iconName: 'point',
        route: 'configuration/progress-spinner',
      },
      {
        displayName: 'Ripples',
        iconName: 'point',
        route: 'configuration/ripples',
      },
      {
        displayName: 'Slide Toggle',
        iconName: 'point',
        route: 'configuration/slide-toggle',
      },
      {
        displayName: 'Slider',
        iconName: 'point',
        route: 'configuration/slider',
      },
      {
        displayName: 'Snackbar',
        iconName: 'point',
        route: 'configuration/snackbar',
      },
      {
        displayName: 'Tabs',
        iconName: 'point',
        route: 'configuration/tabs',
      },
      {
        displayName: 'Toolbar',
        iconName: 'point',
        route: 'configuration/toolbar',
      },
      {
        displayName: 'Tooltips',
        iconName: 'point',
        route: 'configuration/tooltips',
      },
    ],
  },
  {
    displayName: 'Pages',
    iconName: 'clipboard',
    route: '',
    children: [
      {
        displayName: 'Treeview',
        iconName: 'point',
        route: 'theme-pages/treeview',
      },
      {
        displayName: 'Pricing',
        iconName: 'point',
        route: 'theme-pages/pricing',
      },
      {
        displayName: 'Account Setting',
        iconName: 'point',
        route: 'theme-pages/account-setting',
      },
      {
        displayName: 'FAQ',
        iconName: 'point',
        route: 'theme-pages/faq',
      },
      {
        displayName: 'Landingpage',
        iconName: 'point',
        route: 'landingpage',
      },
      {
        displayName: 'Widgets',
        iconName: 'point',
        route: 'widgets',
        children: [
          {
            displayName: 'Cards',
            iconName: 'point',
            route: 'widgets/cards',
          },
          {
            displayName: 'Banners',
            iconName: 'point',
            route: 'widgets/banners',
          },
          {
            displayName: 'Charts',
            iconName: 'point',
            route: 'widgets/charts',
          },
        ],
      },
      {
        displayName: 'Charts',
        iconName: 'point',
        route: 'charts',
        children: [
          {
            displayName: 'Line',
            iconName: 'point',
            route: '/charts/line',
          },
          {
            displayName: 'Gredient',
            iconName: 'point',
            route: '/charts/gredient',
          },
          {
            displayName: 'Area',
            iconName: 'point',
            route: '/charts/area',
          },
          {
            displayName: 'Candlestick',
            iconName: 'point',
            route: '/charts/candlestick',
          },
          {
            displayName: 'Column',
            iconName: 'point',
            route: '/charts/column',
          },
          {
            displayName: 'Doughnut & Pie',
            iconName: 'point',
            route: '/charts/doughnut-pie',
          },
          {
            displayName: 'Radialbar & Radar',
            iconName: 'point',
            route: '/charts/radial-radar',
          },
        ],
      },
      {
        displayName: 'Auth',
        iconName: 'point',
        route: '/',
        children: [
          {
            displayName: 'Login',
            iconName: 'point',
            route: '/authentication',
            children: [
              {
                displayName: 'Side Login',
                iconName: 'point',
                route: '/authentication/side-login',
              },
              {
                displayName: 'Boxed Login',
                iconName: 'point',
                route: '/authentication/boxed-login',
              },
            ],
          },
          {
            displayName: 'Register',
            iconName: 'point',
            route: '/authentication',
            children: [
              {
                displayName: 'Side Login',
                iconName: 'point',
                route: '/authentication/side-register',
              },
              {
                displayName: 'Boxed Login',
                iconName: 'point',
                route: '/authentication/boxed-register',
              },
            ],
          },
          {
            displayName: 'Forgot Password',
            iconName: 'point',
            route: '/authentication',
            children: [
              {
                displayName: 'Side Forgot Password',
                iconName: 'point',
                route: '/authentication/side-forgot-pwd',
              },
              {
                displayName: 'Boxed Forgot Password',
                iconName: 'point',
                route: '/authentication/boxed-forgot-pwd',
              },
            ],
          },
          {
            displayName: 'Two Steps',
            iconName: 'point',
            route: '/authentication',
            children: [
              {
                displayName: 'Side Two Steps',
                iconName: 'point',
                route: '/authentication/side-two-steps',
              },
              {
                displayName: 'Boxed Two Steps',
                iconName: 'point',
                route: '/authentication/boxed-two-steps',
              },
            ],
          },
          {
            displayName: 'Error',
            iconName: 'point',
            route: '/authentication/error',
          },
          {
            displayName: 'Maintenance',
            iconName: 'point',
            route: '/authentication/maintenance',
          },
        ],
      },
    ],
  },
  {
    displayName: 'Forms',
    iconName: 'file-description',
    route: 'forms',
    children: [
      {
        displayName: 'Form elements',
        iconName: 'point',
        route: 'forms/forms-elements',
        children: [
          {
            displayName: 'Autocomplete',
            iconName: 'point',
            route: 'forms/forms-elements/autocomplete',
          },
          {
            displayName: 'Button',
            iconName: 'point',
            route: 'forms/forms-elements/button',
          },
          {
            displayName: 'Checkbox',
            iconName: 'point',
            route: 'forms/forms-elements/checkbox',
          },
          {
            displayName: 'Radio',
            iconName: 'point',
            route: 'forms/forms-elements/radio',
          },
          {
            displayName: 'Datepicker',
            iconName: 'point',
            route: 'forms/forms-elements/datepicker',
          },
        ],
      },
      {
        displayName: 'Form Layouts',
        iconName: 'point',
        route: '/forms/form-layouts',
      },
      {
        displayName: 'Form Horizontal',
        iconName: 'point',
        route: '/forms/form-horizontal',
      },
      {
        displayName: 'Form Vertical',
        iconName: 'point',
        route: '/forms/form-vertical',
      },
      {
        displayName: 'Form Wizard',
        iconName: 'point',
        route: '/forms/form-wizard',
      },
    ],
  },
  {
    displayName: 'Tables',
    iconName: 'layout',
    route: 'tables',
    children: [
      {
        displayName: 'Basic Table',
        iconName: 'point',
        route: 'tables/basic-table',
      },
      {
        displayName: 'Dynamic Table',
        iconName: 'point',
        route: 'tables/dynamic-table',
      },
      {
        displayName: 'Expand Table',
        iconName: 'point',
        route: 'tables/expand-table',
      },
      {
        displayName: 'Filterable Table',
        iconName: 'point',
        route: 'tables/filterable-table',
      },
      {
        displayName: 'Footer Row Table',
        iconName: 'point',
        route: 'tables/footer-row-table',
      },
      {
        displayName: 'HTTP Table',
        iconName: 'point',
        route: 'tables/http-table',
      },
      {
        displayName: 'Mix Table',
        iconName: 'point',
        route: 'tables/mix-table',
      },
      {
        displayName: 'Multi Header Footer',
        iconName: 'point',
        route: 'tables/multi-header-footer-table',
      },
      {
        displayName: 'Pagination Table',
        iconName: 'point',
        route: 'tables/pagination-table',
      },
      {
        displayName: 'Row Context Table',
        iconName: 'point',
        route: 'tables/row-context-table',
      },
      {
        displayName: 'Selection Table',
        iconName: 'point',
        route: 'tables/selection-table',
      },
      {
        displayName: 'Sortable Table',
        iconName: 'point',
        route: 'tables/sortable-table',
      },
      {
        displayName: 'Sticky Column',
        iconName: 'point',
        route: 'tables/sticky-column-table',
      },
      {
        displayName: 'Sticky Header Footer',
        iconName: 'point',
        route: 'tables/sticky-header-footer-table',
      },
      {
        displayName: 'Data table',
        iconName: 'border-outer',
        route: '/datatable/kichen-sink',
      },
    ],
  },
  {displayName: 'Invoice',
  iconName: 'moneybag',
  route: 'invoice',}
];
