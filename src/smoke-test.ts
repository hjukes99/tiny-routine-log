import { strict as assert } from 'node:assert';
import { getHealth } from './index.js';

const health = getHealth();
assert.equal(health.status, 'ok');
assert.equal(health.service, 'tiny-routine-log');
assert.ok(Date.parse(health.timestamp) > 0, 'timestamp should be parseable');

console.log('smoke-test: pass');
