import { INavItem } from '../models/INavItem';

export const NavItems: INavItem[] = [
  {
    name: 'Dashboard',
    url: '/main',
    icon: '../../assets/svg/dashboard.svg',
  },
  {
    name: 'Sales',
    icon: '../../assets/svg/cart.svg',
    isShown: false,
    children: [
      {
        name: 'POS',
        url: '/makesale',
        icon: '../../assets/svg/pos.svg',
      },
      {
        name: 'Sales Refund',
        url: '/refunds',
        icon: '../../assets/svg/refund.svg',
      },
      {
        name: 'Quickpay',
        url: '/quickpay',
        icon: '../../assets/svg/pay.svg',
      },
    ],
  },
  {
    name: 'My Store',
    icon: '../../assets/svg/store.svg',
    isShown: false,
    children: [
      {
        name: 'New Orders',
        url: '/neworders',
        icon: '../../assets/svg/neworder.svg',
      },
      {
        name: 'Fulfilled Orders',
        url: '/fulfilledorders',
        icon: '../../assets/svg/fulfilledorder.svg',
      },
      {
        name: 'Delivered Orders',
        url: '/deliveredorders',
        icon: '../../assets/svg/deliveredorder.svg',
      },
      // {
      //   name: 'Cancelled Orders',
      //   url: '/cancelledorders',
      //   icon: 'icon-puzzle'
      // }
    ],
  },
  {
    name: 'Setup',
    icon: '../../assets/svg/cog.svg',
    isShown: false,
    children: [
      {
        name: 'Customer',
        url: '/customer',
        icon: '../../assets/svg/customer.svg',
      },
      {
        name: 'Product Category',
        url: '/product&cat',
        icon: '../../assets/svg/category.svg',
      },
      {
        name: 'Service',
        url: '/service',
        icon: '../../assets/svg/service.svg',
      },
      {
        name: 'Service Category',
        url: '/service&cat',
        icon: '../../assets/svg/category.svg',
      },
      {
        name: 'Suppliers',
        url: '/all-suppliers',
        icon: '../../assets/svg/supplier.svg',
      },
      {
        name: 'Vendors',
        url: '/vendors',
        icon: '../../assets/svg/vendor.svg',
      },
      {
        name: 'Products',
        url: '/products',
        icon: '../../assets/svg/products.svg',
      },
      {
        name: 'Move Product',
        url: '/move-product',
        icon: '../../assets/svg/truck.svg',
      },
      {
        name: 'Adjust Stock',
        url: '/adjust-stock',
        icon: '../../assets/svg/addstock.svg',
      },
    ],
  },
  {
    name: 'Basic Reports',
    icon: '../../assets/svg/report.svg',
    isShown: false,
    children: [
      {
        name: 'Sales History',
        url: '/saleshistory',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Sales Summary',
        url: '/sales-report',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Payment Summary',
        url: '/payment-summary',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Expense History',
        url: '/expense-history',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Cashier Overview',
        url: '/cashier-overview',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Customer History',
        url: '/customer-report',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Product History',
        url: '/product-report',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Stock on hand',
        url: '/stock-report',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Staff Performance',
        url: '/staffPerformance',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Pay-by Transfer Report',
        url: '/pay-by-transfer-report',
        // icon: 'icon-puzzle',
      },
    ],
  },
  {
    name: 'Advanced Reports',
    icon: '../../assets/svg/advancedreport.svg',
    isShown: false,
    children: [
      {
        name: 'Business Overview',
        url: '/daily-overview',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Profit',
        url: '/profit-report',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Stock Dashboard',
        url: '/stockdashboard',
        // icon: 'icon-puzzle',
      },
      {
        name: 'POS Report',
        url: '/pos-report',
        // icon: 'icon-puzzle',
      },
      {
        name: 'VOGIS Report',
        url: '/advsoh',
        // icon: 'icon-puzzle',
      },

      {
        name: 'Product sales summary',
        url: '/advsalesrep',
        // icon: 'icon-puzzle',
      },
      {
        name: 'Debtors',
        url: '/debtors',
        // icon: 'icon-puzzle',
      },
    ],
  },

  {
    name: 'Profile',
    url: '/profile',
    icon: '../../assets/svg/profile.svg',
  },
  // {
  //   name: 'MY APPS',
  //   url: '/my-apps',
  //   icon: 'icon-speedometer',
  // }
];
