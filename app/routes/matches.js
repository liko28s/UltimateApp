import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //Añadir partido en curso
    return this.get('store').findAll('match');
  }
});
