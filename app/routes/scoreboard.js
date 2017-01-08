import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('group');
  },
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('scoreboard');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
