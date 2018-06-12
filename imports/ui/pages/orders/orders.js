import './orders.html';
import Orders from '/imports/db/orders/orders-collection';

/**
 * Initialize some data for future processing.
 */
Template.orders.onCreated(function () {
  this.isLoading = new ReactiveVar(true);
  Meteor.subscribe("orders-data");
});

Template.orders.helpers({
  /**
   * Populate the grid with data from Orders collection
   */
  ordersList() {
    return Orders.find().fetch();
  },

  /**
   * Loader when data is not fully retrieved.
   */
  isLoading() {
    return Template.instance().isLoading.get();
  },
});

Template.orders.onRendered(function () {
  Template.instance().isLoading.set(false);
});

/**
 * TODO: MOVE THIS FOR REUSING THEM!!!
 */
Template.registerHelper("equals", (a1, a2) => {
  return a1 === a2;
});

Template.registerHelper("log", (something) => {
  console.log(something);
});
