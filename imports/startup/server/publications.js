import Customers from '/imports/db/customers/customers-collection';
import Orders from '/imports/db/orders/orders-collection';
import { publishPagination } from 'meteor/kurounin:pagination';

publishPagination(Customers);

Meteor.publish('customers-data', function () {
  return Customers.find();
});

Meteor.publish('orders-data', function() {
  return Orders.find();
});
