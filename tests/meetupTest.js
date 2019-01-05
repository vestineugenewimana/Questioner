/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('adding a meetup', () => {
    it('should add new meetup', (done) => {
      const meetup = {
        title: 'javascript',
        location: 'Musanze, City Market',
        topic: 'es6 js',
        happeningOn: new Date(),
        tags: 'js es6',
      };
      chai
        .request(app)
        .post('/api/v1/meetups')
        .send(meetup)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('created a new meetup');

          done();
        });
    });
  });