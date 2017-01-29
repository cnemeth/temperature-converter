import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('temperature-converter', 'Integration | Component | temperature converter', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{temperature-converter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#temperature-converter}}
      template block text
    {{/temperature-converter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
