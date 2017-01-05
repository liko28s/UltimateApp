import Ember from 'ember';

//TODO ordenar por puntos o pp o cualquier cosa
export default Ember.Controller.extend({
  application: Ember.inject.controller('application'),
  title:'Fases del Torneo',
  init(){
    var app = this.get('application');
    app.set('titleText',this.get('title'))
  }
});
