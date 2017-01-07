import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('team',params.team_id);
  },
  afterModel(transition, originRoute) {
    let controller = this.controllerFor('calendar');
    controller.set('titleText', controller.get('title'));
    controller.changeTitle();
  }
});
