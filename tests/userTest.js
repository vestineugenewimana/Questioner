import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);

describe("User", () => {
  describe("Get all users", () => {
    it("should return an object of all users", done => {
      chai
        .request(app)
        .get("/api/v1/users")
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          done();
        });
    });
  });
  describe("Get one user with id 1", () => {
    it("should return one user object", done => {
      const id = 1;
      chai
        .request(app)
        .get(`/api/v1/users/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.message).to.equal("one user found");
          done();
        });
    });
  });
  describe("Get one user with id 10000", () => {
    it("should return error", done => {
      const id = 10000;
      chai
        .request(app)
        .get(`/api/v1/users/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.error).to.equal("no user found with that id");
          done();
        });
    });
  });
  describe("adding a user", () => {
    it("should add new user", done => {
      const user = {
        fullnames: "user1 names",
        emails: "user1@gmail.com",
        location:"Kigali Rwanda",
        password:'password',
        registered: new Date(),
        isAdmin: "true",
        
      };
      chai
        .request(app)
        .post("/api/v1/users")
        .send(user)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.message).to.equal("created a new user");

          done();
        });
    });
  });
  describe("Delete a user with id 3", () => {
    it("should return one user object", done => {
      const id = 3;
      chai
        .request(app)
        .delete(`/api/v1/users/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a("object");
          chai.expect(res.body.message).to.equal("user successfully deleted");
          done();
        });
    });
  });
});
