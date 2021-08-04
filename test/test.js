const supertest = require('supertest');
const router = require('../src/router');

test('homeTest', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('content-type', /html/) // regular expression
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});
