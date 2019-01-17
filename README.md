# Questioner [![Build Status](https://travis-ci.com/vestineugenewimana/Questioner.svg?branch=MeetupAPI)](https://travis-ci.com/vestineugenewimana/Questioner) [![Coverage Status](https://coveralls.io/repos/github/vestineugenewimana/Questioner/badge.svg?branch=MeetupAPI&kill-cache=1)](https://coveralls.io/github/vestineugenewimana/Questioner?branch=MeetupAPI&service=githu) [![Maintainability](https://api.codeclimate.com/v1/badges/7b7a510cae44942c3ae3/maintainability)](https://codeclimate.com/github/vestineugenewimana/Questioner/maintainability)
Questioner is Crowd-source questions for a meetup that helps the meetup organizer prioritize
questions to be answered. Other users can vote on asked questions and they bubble to the top or bottom of the log.

### Deployed on Heroku: https://vesquestioner.herokuapp.com/

# Questioner API standards

- [Setup Instructions](#instructions)
- [RESTful URLs](#restful-urls)

## Setup instructiions

Install dependencies:

```sh
$ npm install
```

Startup the Server:

```sh
$ npm start
```

Run Tests:

```sh
$ npm run test
```

## RESTful URLS

| Method | Endpoint | Description
| --- | --- | -- |
| GET | /api/v1/meetups | List all meetups |
| GET | /api/v1/meetups/:meetupId | Query specific meetup |
| POST | /api/v1/meetups | Create a meetup |
| PUT | /api/v1/meetups/:meetupId | update meetup |
| DELETE | /api/v1/meetups/:meetupId | Delete a meetup |
| GET | /api/v1/users | List all users |
| POST | /api/v1/users | add a new user |
| GET | /api/v1/users/:userId | Query specfic user|
| PUT | /api/v1/users/:userId | Update user |
| DELETE | /api/v1/users/:userId | Delete user|
| GET | /api/v1/questions | List all questions |
| GET | /api/v1/questions/:questionId | Query specific question |
| POST | /api/v1/questions | create a question |
| PUT | /api/v1/questions/:questionId | update upvote or downvote |
| DELETE | /api/v1/questions/:questionId | delete a question |



## Required features

* Admin can create meetups.
* users can create an account an account and login.
* Users can post questions to a specific meetup

## Resources/Tutorials That helped me to setting up APIs are the following:
* https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
* https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9
* https://github.com/helpybruce/CRUD_blog_postgress_ES6_API/tree/master/server
* https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e
* https://gist.github.com/soheilhy/867f76feea7cab4f8a84
* https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
* https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs

## Author

* Vestine Ugenewimana
