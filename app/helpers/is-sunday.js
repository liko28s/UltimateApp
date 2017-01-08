import Ember from 'ember';

export function isSunday(params/*, hash*/) {
  if (params[0].getDay() === 0) {
    return true;
  }
  return false;
}

export default Ember.Helper.helper(isSunday);
