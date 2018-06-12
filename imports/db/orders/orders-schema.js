import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
}, {tracker: Tracker});
