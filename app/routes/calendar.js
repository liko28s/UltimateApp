import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let matches = this.get('store').findAll('match');
    this.get('store').push({data: matches.toArray()});
    return matches;
  }
});
