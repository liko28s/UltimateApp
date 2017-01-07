import Ember from 'ember';

export default Ember.Controller.extend({
  events:[
      {id:1,name:"Inicio del Partido"},
      {id:2,name:"Anotacion - Punto"},
      {id:3,name:"Falta - Infraccion"},
      {id:4,name:"Cambio"},
      {id:5,name:"Tiempo Fuera - Descanso"},
      {id:6,name:"Fin del Partido"}
      ]
  ,
  actions: {
    submit() {
      let store = this.get('store');
      let event = store.createRecord('detail',{
        match_id: this.selectedMatch,
        date_time: this.date_time,
        team_id: this.selectedTeam.id,
        player_id: this.selectedPlayer.id,
        event: this.selectedEvent.id,
        status: 1,
        description: this.description,
      });
      event.save();
      this.transitionToRoute('index')

    },
    setPlayers(playersProxy) {
      this.set('players',playersProxy.toArray());
    },
    searchPlayers(playersProxy) {
      let term = this.get('playerSearchText');
      return playersProxy.toArray().sort(function (a, b) {
        if((a.name+a.last_name).toLowerCase().includes(term.toLowerCase())) {
          return -1
        }else {
          if ((b.name+b.last_name).toLowerCase().includes(term.toLowerCase())){
            return 1
          }
          return 0
        }
      })
    }
  }
});
