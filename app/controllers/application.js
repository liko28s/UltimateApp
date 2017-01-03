import Ember from 'ember';

export default Ember.Controller.extend({
  title:'Ultimate Puerta de Oriente',
  setTitle(newTitle) {
    this.set('title',newTitle)
  }
});
