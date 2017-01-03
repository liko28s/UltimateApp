import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host:'http://54.164.10.62',
  namespace: 'api'
});
