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
  this.route('scoreboard', function() {
    this.route('groups');
    this.route('quarters');
    this.route('semifinals');
    this.route('finals');
  });
  this.route('donations');
  this.route('calendar');
  this.route('matches', function() {});
  this.route('loading');
  this.route('events', function() {
    this.route('add');
    this.route('update');
  });
});

export default Router;
