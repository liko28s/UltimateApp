import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller('application'),
  title:'Equipos',
  init(){
    var app = this.get('application');
    app.set('titleText',this.get('title'));
  }
});
