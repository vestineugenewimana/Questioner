/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('Meetup', () => {
  describe('Get all meetups', () => {
    it('should return an object of all meetups', (done) => {
      chai
        .request(app)
        .get('/api/v1/meetups')
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          done();
        });
    });
});
});