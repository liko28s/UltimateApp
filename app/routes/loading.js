import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('application');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
