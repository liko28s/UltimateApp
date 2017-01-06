import DS from 'ember-data';

export default DS.Model.extend({
  match_time: DS.attr('date'),
  arena_id: DS.attr(),
  team_one: DS.belongsTo('team'),
  team_two: DS.belongsTo('team'),
  details: DS.hasMany('detail'),
  status: DS.attr(),
});
