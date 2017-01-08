import Ember from 'ember';

export default Ember.Component.extend({
  positionalParams: ['date'],
  init(){
    this._super(...arguments);
    if (this.date.getDay() === 6) {
      this.set('dayName','Sabado');
      this.set('day',7);
    } else if (this.date.getDay() === 0) {
      this.set('dayName','Domingo');
      this.set('day',8);
    } else if(this.date.getDay() === 1) {
      this.set('dayName', 'Lunes');
      this.set('day',9);
    }
    let minutes;
    if(this.date.getMinutes() < 10) {
      minutes = '0'+this.date.getMinutes();
    } else {
      minutes =this.date.getMinutes();
    }

    if(this.date.getHours() > 12) {
      this.set('hour',this.date.getHours()-12+':'+minutes+' PM');
    } else if(this.date.getHours() === 12){
      if(minutes > 0) {
        this.set('hour',this.date.getHours()+':'+minutes+' PM');
      } else {
        this.set('hour',this.date.getHours()+':'+minutes+' M');
      }
    }
    else {
      this.set('hour',this.date.getHours()+':'+minutes+' AM');
    }
  },
});
