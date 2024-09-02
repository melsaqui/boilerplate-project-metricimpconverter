const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
      test('Test GET /api/convert with Valid Input', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=10L')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type,'application/json','Response should be json', );
            assert.equal(res.body.initNum,10);
            assert.equal(res.body.initUnit,"L");
            assert.equal(res.body.returnNum,2.64172);
            assert.equal(res.body.returnUnit,"gal");
            assert.equal(res.body.string,"10 liters converts to 2.64172 gallons");

            done();
          });
      });
      test('Test GET /api/convert with Invalid Input', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=10g')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type,'application/json','Response should be json', );
            assert.equal(res.body,"invalid unit");

            done();
          });
      });
      test('Test GET /api/convert with Invalid Number', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=10/5. 67kg')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type,'application/json','Response should be json', );
            assert.equal(res.body,"invalid number");

            done();
          });
      });
      test('Test GET /api/convert with Invalid Number and Unit', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=10/5. 67g')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type,'application/json','Response should be json', );
            assert.equal(res.body,"invalid number and unit");

            done();
          });
      });
      test('Test GET /api/convert with No number', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=mi')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type,'application/json','Response should be json', );
            assert.equal(res.body.initNum,1);
            assert.equal(res.body.initUnit,"mi");
            assert.equal(res.body.returnNum,1.60934);
            assert.equal(res.body.returnUnit,"km");
            assert.equal(res.body.string,"1 miles converts to 1.60934 kilometers");

            done();
          });
      });
});
