const supertest = require("supertest");
const router = require('./src/router');
test('homeTest', () => {
    supertest(router)
    .get('/')
    .expect(200)
    .expect('content-type', '/html/')
    .end(() => {});
});