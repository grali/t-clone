const assert = require('assert');
const app = require('../../src/app');

describe('\'tweet\' service', () => {
  it('registered the service', () => {
    const service = app.service('tweet');

    assert.ok(service, 'Registered the service');
  });
});
