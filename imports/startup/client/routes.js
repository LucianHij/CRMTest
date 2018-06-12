import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import '/imports/ui/layouts/app-body.js';
import '/imports/ui/pages/app-not-found/app-not-found.js';
import '/imports/ui/pages/app-dashboard/app-dashboard.js';
import '/imports/ui/pages/customers/customers.js';
import '/imports/ui/pages/orders/orders.js';
import '/imports/ui/pages/customers/customer-add/customer-add.js';
import '/imports/ui/pages/orders/order-add/order-add.js';
import '/imports/ui/pages/customers/customer-edit/customer-edit.js';

FlowRouter.route('/', {
  name: 'App_CRM',
  action() {
    BlazeLayout.render('App_body', { main: 'App_CRM' });
  },
});

FlowRouter.route('/customers', {
  name: 'customers',
  action() {
    BlazeLayout.render('App_body', { main: 'customers' });
  },
});

FlowRouter.route('/orders', {
  name: 'orders',
  action() {
    BlazeLayout.render('App_body', { main: 'orders' });
  },
});

FlowRouter.route('/customer-add', {
  name: 'customer-add',
  action() {
    BlazeLayout.render('App_body', { main: 'insertCustomerForm' });
  },
});

FlowRouter.route('/order-add', {
  name: 'order-add',
  action() {
    BlazeLayout.render('App_body', { main: 'insertOrderForm' });
  },
});

FlowRouter.route('/customer-edit/:_id', {
  action() {
    BlazeLayout.render('App_body', { main: 'editCustomerForm' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
});
