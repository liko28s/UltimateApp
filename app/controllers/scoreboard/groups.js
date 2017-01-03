import Ember from 'ember';

export default Ember.Controller.extend({
  title:'Fase de Grupos',
  actions: {
    /* Dialog with parent */
    openDialog(team) {
      this.set('showDialog', true);
      this.set('team',team);
    },

    closeDialog(result) {
      this.set('showDialog', false);
      this.set('result', result);
    }
  }
});
