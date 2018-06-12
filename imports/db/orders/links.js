import Customers from '../customers/customers-collection';
import Orders from './orders-collection';

Orders.addLinks({
  'customer': {
    collection: Customers,
    inversedBy: 'orders',
  },
});