import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['temperature-converter'],
  celsius: 'Celsius',
  fahrenheit: 'Fahrenheit',

  actions: {
    toCelsius() {
    },

    toFahrenheit() {
    }
  }
});
