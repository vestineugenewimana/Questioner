/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);
  describe('Delete a user with id 3', () => {
    it('should return one user object', (done) => {
      const id = 3;
      chai
        .request(app)
        .delete(`/api/v1/users/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('user successfully deleted');
          done();
        });
    });
  });
  describe('Delete a user with id 1000', () =>{
    it('should return error', (done) => {
      const id = 10000;
      chai
        .request(app)
        .delete(`/api/v1/users/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.error).to.equal('could not delete a user');
          done();
        });
    });
  });


