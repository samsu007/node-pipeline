var request = require('supertest')
var app = require('../index')

describe('GET /', function(){
    it('respond with hello samsu', (done)=>{
        request(app).get('/').expect('hello samsu', done)
    })
})