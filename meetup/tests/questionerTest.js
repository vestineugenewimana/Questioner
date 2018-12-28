import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);

describe("Meetup", () => {
  describe("Get all meetups", () => {
    it("should return an object of all meetups", done => {
      chai
        .request(app)
        .get("/api/v1/meetups")
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          done();
        });
    });
  });
  describe("Get one meetup with id 1", () => {
    it("should return one meetup object", done => {
      const id = 1;
      chai
        .request(app)
        .get(`/api/v1/meetups/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.message).to.equal("one meetup found");
          done();
        });
    });
  });
  describe("Get one meetup with id 10000", () => {
    it("should return error", done => {
      const id = 10000;
      chai
        .request(app)
        .get(`/api/v1/meetups/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.error).to.equal("no meetup found with that id");
          done();
        });
    });
  });
  describe("adding a meetup", () => {
    it("should add new meetup", done => {
      const meetup = {
        title: "javascript",
        location: "Musanze, City Market",
        topic: "es6 js",
        happeningOn: new Date(),
        tags: "js es6"
      };
      chai
        .request(app)
        .post("/api/v1/meetups")
        .send(meetup)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.message).to.equal("created a new meetup");

          done();
        });
    });
  });
  describe("Delete a meetup with id 3", () => {
    it("should return one meetup object", done => {
      const id = 3;
      chai
        .request(app)
        .delete(`/api/v1/meetups/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.message).to.equal("meetup successfully deleted");
          done();
        });
    });
  });
});
