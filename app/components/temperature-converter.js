import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['temperature-converter'],

  actions: {
    convertTemperature: function() {
      var cels = this.get('celsius');
      var fahr = this.get('fahrenheit');

      if ( !Ember.isEmpty(cels) && !isNaN(cels) ) {
        var f = (9/5 * cels + 32);
        this.set('fahrenheit', f.toFixed(1));
      }

      if ( !Ember.isEmpty(fahr) && !isNaN(fahr) ) {
        var c = (5/9) * (fahr - 32);
        this.set('celsius', c.toFixed(1));
      }
    }
  }
});
