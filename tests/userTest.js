/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);


  describe('adding a user', () => {
    it('should add a new user', (done) => {
      const user = {
        fullnames: 'user1 names',
        emails: 'user1@gmail.com',
        location: 'Kigali Rwanda',
        password: 'password',
        registered: new Date(),
        isAdmin: 'true',

      };
      chai
        .request(app)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('created a new user account');

          done();
        });
    });
  });
