import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('match',{phase:4});
  },
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('calendar');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
