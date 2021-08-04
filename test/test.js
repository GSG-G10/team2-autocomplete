const supertest = require('supertest');
const router = require('../src/router');

test('homeTest', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('content-type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});
test('autocompleter should return list of suggestions', (done) => {
  const gaza = {
    country: 'PS',
    name: 'Gaza',
    lat: '31.50161',
    lng: '34.46672',
  };

  supertest(router).get('/search?q=gaza').expect(200).expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.text).toMatch(JSON.stringify(gaza));
      done();
    });
});
