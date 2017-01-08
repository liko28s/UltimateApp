import Ember from 'ember';

export function score(params) {
  let match_details = params[0];
  var score = 0;
  match_details.forEach(function (detail) {
    if(detail.get('team_id')) {
      if(detail.get('team_id').content.id == params[1] && detail.get('event') == 2) {
        score+=1;
      }
    }
  });
  return score;
}

export default Ember.Helper.helper(score);
