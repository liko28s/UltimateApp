import DS from 'ember-data';

export default DS.Model.extend({
  match_id: DS.belongsTo('match'),
  date_time: DS.attr('date'),
  team_id: DS.belongsTo('team'),
  player_id: DS.belongsTo('player'),
  event: DS.attr('number'),
  status: DS.attr('boolean'),
  description: DS.attr('string')
});
