import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  age: {
    type: Number,
  },
}, {tracker: Tracker});
