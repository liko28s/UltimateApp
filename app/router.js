import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('teams', function() {
    this.route('detail',{path:':team_id'});
  });
  this.route('players', function() {
    this.route('detail',{path:':player_id'});
  });
});

export default Router;
