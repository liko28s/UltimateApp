import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('player');
  },
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('calendar');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
