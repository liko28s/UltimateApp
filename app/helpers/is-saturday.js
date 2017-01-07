import Ember from 'ember';

export function isSaturday(params/*, hash*/) {
  if (params[0].getDay() === 6) {
    return true
  }
  return false
}

export default Ember.Helper.helper(isSaturday);
