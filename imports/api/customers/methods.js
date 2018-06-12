import {Meteor} from "meteor/meteor";
import Customers from "/imports/db/customers/customers-collection.js";

Meteor.methods({
  "customer.create"(customer) {
    Customers.insert(customer);
  },

  "customer.getAll"() {
    return Customers.find().fetch();
  },

  customers() {
    const query = Customers.createQuery({
      $options: {
        sort: {firstName: -1},
      },
      firstName: 1,
      orderIds: 1,
    });

    return query.fetch();
  },
});
