import {Mongo} from 'meteor/mongo';
import ProductSchema from './products-schema';

const Products = new Mongo.Collection('products');
Products.attachSchema(ProductSchema);

export default Products;
