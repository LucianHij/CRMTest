import './customer-edit.html'
import Customers from '/imports/db/customers/customers-collection.js';

Template.editCustomerForm.onCreated(function () {
  Meteor.subscribe("customers-data");
});

Template.editCustomerForm.helpers({
  /**
   * Retrieve the customer to be updated.
   */
  customerDoc() {
    return Customers.findOne(FlowRouter.getParam('_id'));
  },
});

