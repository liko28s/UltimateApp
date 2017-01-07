import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  last_name: DS.attr('string'),
  team_id: DS.belongsTo('team'),
  full_name: DS.attr('string'),
  nick_name: DS.attr('string'),
  number: DS.attr('string'),
  vegetarian: DS.attr('boolean'),
  camping: DS.attr('boolean'),
  profile_image: DS.attr('string')
});
