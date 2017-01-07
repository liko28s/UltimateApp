import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').unloadAll();
    return this.get('store').query('match',{current:true})
  },
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('calendar');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
