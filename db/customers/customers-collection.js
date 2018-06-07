import { Mongo } from 'meteor/mongo';
import CustomerSchema from './customers-schema';

const Customers = new Mongo.Collection('customers');
Customers.attachSchema(CustomerSchema);

export default Customers;