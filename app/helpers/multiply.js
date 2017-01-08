import Ember from 'ember';

export function multiply(params/*, hash*/) {
  return params.reduce((a, b) => {
    return a * b;
  });
}

export default Ember.Helper.helper(multiply);
