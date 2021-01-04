QUnit.config.reorder = false;

QUnit.module('toFixed', function() {
  QUnit.test('should round to provided precision including edge cases', function(assert) {
    assert.strictEqual(
      toFixed(0.615, 2),
      '0.62',
      'toFixed(0.615, 2) returns 0.62'
    );
    assert.strictEqual(
      toFixed(10.235, 2),
      '10.24',
      'toFixed(10.235, 2) returns 10.24'
    );
    assert.strictEqual(
      toFixed(1.005, 2),
      '1.01',
      'toFixed(1.005, 2) returns 1.01'
    );
    assert.strictEqual(
      toFixed(1250, 2),
      '1250.00',
      'toFixed(1250, 2) returns 1250.00'
    );
    assert.strictEqual(
      toFixed(11.500, 0),
      '12',
      'toFixed(11.500, 0) returns 12'
    );
    assert.strictEqual(
      toFixed(6.15, 5),
      '6.15000',
      'toFixed(6.15, 5) returns 6.15000'
    );
    assert.strictEqual(
      toFixed(2.999, 3),
      '2.999',
      'toFixed(2.999, 3) returns 2.999'
    );
    assert.strictEqual(
      toFixed(8, 3),
      '8.000',
      'toFixed(8, 3) returns 8.000'
    );
  });
});
