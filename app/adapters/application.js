import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host:'http://54.164.10.62',
  //host:'http://localhost:8080',
  namespace: 'api'
});
