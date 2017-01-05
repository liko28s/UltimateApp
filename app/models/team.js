import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  coach: DS.belongsTo('coach'),
  profile_image: DS.attr('string'),
  players: DS.attr(),
  matches:DS.attr()
});
