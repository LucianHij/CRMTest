import "./customers.html";
import Customers from "/imports/db/customers/customers-collection";

Template.customers.onCreated(function () {
  this.pagination = new Meteor.Pagination(Customers, {
    sort: {
      _id: -1
    },
    perPage: 3,
  });

  this.isLoading = new ReactiveVar(true);
  Meteor.subscribe("customers-data");
  Meteor.call("customers", (error, response) => {
    if (response) {
      console.log(response);
    }
  });
});

Template.customers.helpers({
  /**
   * Populate the grid with data from Customers collection
   */
  customersList() {
    return Customers.find().fetch();
  },

  /**
   * Loader when data is not fully retrieved.
   */
  isLoading() {
    return Template.instance().isLoading.get();
  },

  isReady: function () {
    return Template.instance().pagination.ready();
  },
  templatePagination: function () {
    return Template.instance().pagination;
  },
  documents: function () {
    return Template.instance().pagination.getPage();
  },
  // optional helper used to return a callback that should be executed before changing the page
  clickEvent: function() {
    return function(e, templateInstance, clickedPage) {
      e.preventDefault();
      console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
    };
  },
});

Template.customers.onRendered(function () {
  Template.instance().isLoading.set(false);
});

// Template.customers.events({
//     'click #test': function(e, tpl) {
//         console.log('test');
//         console.log(e);
//         console.log(tpl); // template instance;
//     }
// })

Template.registerHelper("equals", (a1, a2) => {
  return a1 === a2;
});

Template.registerHelper("log", (something) => {
  console.log(something);
});

