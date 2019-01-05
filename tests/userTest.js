/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

  describe('update a user with id 1', () => {
    it('should update one user object', (done) => {
      const id = 1;
      chai
        .request(app)
        .put(`/api/v1/users/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('successfully updated');
          done();
        });
    });
  });

describe('update one user with id 10000', () => {
  it('should return error', (done) => {
    const id = 10000;
    chai
      .request(app)
      .put(`/api/v1/users/${id}`)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body.error).to.equal('user cannot be updated');
        done();
      });
  });
});
  