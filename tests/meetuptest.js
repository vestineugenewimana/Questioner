/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);
describe('getOnemeetup with id 1', () => {
    it('should return one meetup object', (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/api/v1/meetups/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('one meetup found');
          done();
        });
    });
  
  describe('getOnemeetup with id 10000', () => {
    it('should return error', (done) => {
      const id = 10000;
      chai
        .request(app)
        .get(`/api/v1/meetups/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.error).to.equal('no meetup found with that id');
          done();
        });
    });
  });
});