import Customers from './customers-collection';
import Orders from '../orders/orders-collection';

Customers.addLinks({
  'orders': {
    type: 'many',
    collection: Orders,
    field: 'orderIds',
  },
});
