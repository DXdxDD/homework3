const {
  app
} = require('../src/app');
const {
  asyncReadFile,
  asyncWriteFile
} = require('../src/dao')
const request = require('supertest');

describe("app", () => {
  describe("get request", () => {
    it("should get all accounts when request url pattern is '/api/tasks'", (done) => {
      app.locals.dataFilePath = "./test/user.json"
      request(app).get('/api/tasks').expect(200).expect(
        {
          "id": 1,
          "content": "Restful API homework",
          "createdTime": "2019-03-23T00:00:00Z"
        }
      ).end((err, res) => {
        if (err) throw err;
        done()
      })
    })

    it("should get specific account when request url patten is '/api/tasks/:id'", (done) => {
      request(app).get('/api/tasks/:id').expect(200).expect(
        {
          "id": 1,
          "content": "Restful API homework",
          "createdTime": "2019-03-23T00:00:00Z"
        }
      ).end((err, res) => {
        if (err) throw err;
        done()
      })
    })
  })
})
