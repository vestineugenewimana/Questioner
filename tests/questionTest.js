/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('Question', () => {
  describe('Get all questions', () => {
    it('should return an object of all questions', (done) => {
      chai
        .request(app)
        .get('/api/v1/questions')
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});
