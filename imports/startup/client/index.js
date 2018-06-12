import './useraccounts.js';
import './routes.js';
import '/imports/db/links';
import Customers from '/imports/db/customers/customers-collection.js';
import Orders from '/imports/db/orders/orders-collection.js';

window.Customers = Customers;
window.Orders = Orders;
