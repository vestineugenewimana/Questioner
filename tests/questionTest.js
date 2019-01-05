/* eslint-disable linebreak-style */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('Question', () => {
  
  describe('adding a question', () => {
    it('should add new question', (done) => {
      const question = {
        title: 'javascript',
        meetup: 1,
         body: 'what is javascript?',
         createdBy: 1,
        upvotes: 25,
        downvotes: 10,
        createdOn: new Date(),
      };
      chai
        .request(app)
        .post('/api/v1/questions')
        .send(question)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('created a new Question');

          done();
        });
    });
  });
});
