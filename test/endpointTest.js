const should = require('chai').should();
const server = require('../app/server.js')
const client = require("../app/elastic.js");
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:8080');

describe('Server Tests', function() {

  it('should return a 200 responce when a get request is sent to / endpoint', function(done) {
    supertest(server)
      .get('/')
      .expect(200, done);
  })

  it('should return a 200 responce when a post request is sent to the /event_log endpoint', function(done) {
    supertest(server)
      .post('/event_log')
      .expect(200, done);
  })

  it('should return a 404 when a get request is sent to the /event_log endpoint', function(done) {
    supertest(server)
      .get('/event_log')
      .expect(404, done);
  })

});

after(function(done){
  server.close(done);
  client.close(done);
})