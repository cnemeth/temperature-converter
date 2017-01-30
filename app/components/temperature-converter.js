import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['temperature-converter'],
  isCold: false,

  actions: {
    convertTemperature() {
      var cels = this.get('celsius');
      var fahr = this.get('fahrenheit');

      if ( !Ember.isEmpty(cels) && !isNaN(cels) ) {
        var f = (9/5 * cels + 32);
        if (f < 50) {
          this.set('isCold', true);
        } else {
          this.set('isCold', false);
        }
        this.set('fahrenheit', f.toFixed(1));
      }

      if ( !Ember.isEmpty(fahr) && !isNaN(fahr) ) {
        var c = (5/9) * (fahr - 32);
        if (c < 10) {
          this.set('isCold', true);
        } else {
          this.set('isCold', false);
        }
        this.set('celsius', c.toFixed(1));
      }
    }
  }
});
