import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [{value:'Un Dulce $1 USD'}, {value:'Un Cafecito $2 USD'},  {value:'Un Detallito $5 USD'},  {value:'Un Gran Detalle $10 USD'}];
  }
});
