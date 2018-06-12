import { Meteor } from "meteor/meteor";
import Orders from "/imports/db/orders/orders-collection.js";

Meteor.methods({
  "order.create"(order) {
    Orders.insert(order);
  },

  "order.getAll"() {
    return Orders.find().fetch();
  }
});
