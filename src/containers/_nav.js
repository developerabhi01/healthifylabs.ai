export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Recent']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Items Stock Reports',
        to: '/master/breadcrumbs',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Purchase Order',
    route: '/master',
    icon: 'cil-puzzle',
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Modules']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Master',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Asset Category',
        to: '/master/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Asset Condition',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Asset Type',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Change Password',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Company',
        to: '/master/company',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Department',
        to: '/master/department',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Designation',
        to: '/master/designation',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Expense Request',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Advance Type',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Features',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Features Types',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Generate Barcode',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Holidays',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'HSN Code',
        to: '/master/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Items',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem', 
        name: 'Item Groups',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Last Login details',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave Type',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave policy',
        to: '/master/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave Entitlement',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave Approval',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Location',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Preference Table',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Project',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Store',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tax',
        to: '/master/breadcrumbs',
      },   
      {
        _tag: 'CSidebarNavItem',
        name: 'User Creation',
        to: '/master/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'User Permission',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Vender',
        to: '/master/breadcrumbs',
      }
    ],
  },
{
  _tag: 'CSidebarNavDropdown',
  name: 'Inventory',
  route: '/inventory',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Vendor',
      to: '/inventory/vendor',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Customer',
      to: '/inventory/customer',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Store Transfer',
      to: '/inventory/storetransfer',
    },
      {
        _tag: 'CSidebarNavItem',
        name: 'Store Return',
        to: '/inventory/storereturn',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Billing',
        to: '/inventory/billing',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'HR',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee',
        to: '/master/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave management',
        to: '/master/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave Dashboard',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leave Reports',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Expenses',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem', 
        name: 'Employee Advance',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Timesheet',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Increment/Promotion',
        to: '/master/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Holidays',
        to: '/master/breadcrumbs',
      }
    ],
  },
{
  _tag: 'CSidebarNavDropdown',
  name: 'Finance',
  route: '/master',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Employee Expenses',
      to: '/master/forms',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'EmployeeAdvance',
      to: '/master/tables',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Billing',
      to: '/master/breadcrumbs',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'receipt',
      to: '/master/breadcrumbs',
    }
  ],
},
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Visitors',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Visitors Search',
        to: '/master/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'EAppointment',
        to: '/master/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Visitors Report',
        to: '/master/breadcrumbs',
      }
    ],
  },
{
  _tag: 'CSidebarNavDropdown',
  name: 'Travel',
  route: '/master',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Travel Request',
      to: '/master/forms',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Travell Bill',
      to: '/master/tables',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Travell Report',
      to: '/master/breadcrumbs',
    }
  ],
},
// Asset starts
{
  _tag: 'CSidebarNavDropdown',
  name: 'Asset',
  route: '/master',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Asset Register',
      to: '/master/forms',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'AMC Register',
      to: '/master/tables',
    }
  ],
},
// service ticket starts
{
  _tag: 'CSidebarNavDropdown',
  name: 'Service Ticket',
  route: '/master',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Log/View Ticket',
      to: '/master/forms',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Ticket Status',
      to: '/master/tables',
    }
  ],
},

// Sales starts
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sales',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sales Dashboard',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Customer Search',
        to: '/master/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Lead Search',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Leads B2B Upload',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Search Lead B2B',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quotation Search',
        to: '/master/cards',
      }
    ],
  },
// Admin starts
{
  _tag: 'CSidebarNavDropdown',
  name: 'Admin',
  route: '/admin',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Subscription',
      to: '/master/subscription',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Subscription Status',
      to: '/master/subscriptionstatus',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'UC Products',
      to: '/master/ucproducts',
    }
  ],
},
 
  // reports starts
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Items Stock Reports',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase Order Reports',
        to: '/master/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inward Reports',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inward Report w/o PO',
        to: '/master/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Billing Invoice Report',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Outward Store Reports',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Outward Sales Reports',
        to: '/master/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Package List Report',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Shipment Dispatch Report',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Lead Report List',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quotation Report List',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Timesheet Report',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Advance Ledger',
        to: '/master/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Advance Analysis',
        to: '/master/breadcrumbs',
      }
    ],
  },
]
