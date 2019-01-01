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
  describe('Get one question with id 1', () => {
    it('should return one question object', (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/api/v1/questions/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('one question found');
          done();
        });
    });
  });
  describe('Get one question with id 10000', () => {
    it('should return error', (done) => {
      const id = 10000;
      chai
        .request(app)
        .get(`/api/v1/questions/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.error).to.equal('no question found with that id');
          done();
        });
    });
  });
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
  describe('update a question with id 1', () => {
    it('should update one question object', (done) => {
      const id = 1;
      chai
        .request(app)
        .put(`/api/v1/questions/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('successfully updated');
          done();
        });
    });
  });
});
describe('update one question with id 10000', () => {
  it('should return error', (done) => {
    const id = 10000;
    chai
      .request(app)
      .put(`/api/v1/questions/${id}`)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body.error).to.equal('question cannot be updated');
        done();
      });
  });
});
  describe('Delete a question with id 3', () => {
    it('should return one question object', (done) => {
      const id = 3;
      chai
        .request(app)
        .delete(`/api/v1/questions/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('question successfully deleted');
          done();
        });
    });
  });
  describe('Delete a meetup with id 1000', () =>{
    it('should return error', (done) => {
      const id = 10000;
      chai
        .request(app)
        .delete(`/api/v1/questions/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.error).to.equal('could not delete a question');
          done();
        });
    });
  });
