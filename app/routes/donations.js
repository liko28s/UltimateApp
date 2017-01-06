import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [{value:'Un Dulce $1 USD'}, {value:'Un Cafecito $2 USD'},  {value:'Un Detallito $5 USD'},  {value:'Un Gran Detalle $10 USD'}];
  },
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('calendar');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
