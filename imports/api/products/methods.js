import { Meteor } from "meteor/meteor";
import Products from "/imports/db/products/products-collection.js";

Meteor.methods({
  "product.create"(product) {
    Products.insert(product);
  },

  "product.getAll"() {
    return Products.find().fetch();
  }
});
