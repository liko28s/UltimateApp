import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  last_name: DS.attr('string'),
  team_id: DS.belongsTo('team'),
  profile_image: DS.attr('string')
});
