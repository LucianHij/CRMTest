import {Mongo} from 'meteor/mongo';
import OrdersSchema from './orders-schema';

const Orders = new Mongo.Collection('orders');
Orders.attachSchema(OrdersSchema);
Orders.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  },
});

export default Orders;