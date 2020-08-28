import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/master/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/master/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/master/cards/Cards'));
const Carousels = React.lazy(() => import('./views/master/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/master/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./views/master/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/master/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/master/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/master/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/master/navs/Navs'));
const Paginations = React.lazy(() => import('./views/master/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/master/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/master/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/master/switches/Switches'));

const Tabs = React.lazy(() => import('./views/master/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/master/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const Vendor = React.lazy(() => import('./views/inventory/Vendor.js'));

const Company = React.lazy(() => import('./views/master/company/Company.js'));
const Department = React.lazy(() => import('./views/master/department/Department.js'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/master', name: 'Master', component: Cards, exact: true },
  { path: '/master/company', name: 'Company', component: Company, exact: true },
  { path: '/master/department', name: 'Department', component: Department, exact: true },

  { path: '/inventory/', name: 'Inventory', component: Vendor },
  { path: '/inventory/vendor', name: 'Vendor', component: Vendor },

  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  




  { path: '/master/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/master/cards', name: 'Cards', component: Cards },
  { path: '/master/carousels', name: 'Carousel', component: Carousels },
  { path: '/master/collapses', name: 'Collapse', component: Collapses },
  // { path: '/master/forms', name: 'Forms', component: BasicForms },
  { path: '/master/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/master/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/master/navbars', name: 'Navbars', component: Navbars },
  { path: '/master/navs', name: 'Navs', component: Navs },
  { path: '/master/paginations', name: 'Paginations', component: Paginations },
  { path: '/master/popovers', name: 'Popovers', component: Popovers },
  { path: '/master/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/master/switches', name: 'Switches', component: Switches },
  { path: '/master/tables', name: 'Tables', component: Tables },
  { path: '/master/tabs', name: 'Tabs', component: Tabs },
  { path: '/master/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
