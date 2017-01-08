import Ember from 'ember';

export function isMonday(params/*, hash*/) {
  if (params[0].getDay() === 1) {
    return true;
  }
  return false;
}

export default Ember.Helper.helper(isMonday);
