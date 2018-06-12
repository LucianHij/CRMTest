import {Mongo} from 'meteor/mongo';
import CustomerSchema from './customers-schema';

const Customers = new Mongo.Collection('customers');
Customers.attachSchema(CustomerSchema);
Customers.allow({
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

export default Customers;