import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('match',{current:true})
  },
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('index');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
