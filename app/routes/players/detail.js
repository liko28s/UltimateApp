import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('player',params.player_id);
  }
});
