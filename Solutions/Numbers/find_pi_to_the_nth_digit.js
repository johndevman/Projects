const assert = require('assert').strict;

function find_pi_to_the_nth_digit(n) {
  const pi = Math.PI.toString();
  return parseFloat(pi.substr(0, n + 2));
}

assert.strictEqual(find_pi_to_the_nth_digit(2), 3.14);
assert.strictEqual(find_pi_to_the_nth_digit(7), 3.1415926);