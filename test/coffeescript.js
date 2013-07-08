var should    = require('should')
var polymer   = require('../')

describe("coffeescript", function(){
  var root = __dirname + "/fixtures/templates"
  var poly = polymer.root(root)

  it("should translate coffeescript to javascript", function(done){
    poly.render("main.coffee", function(errors, body){
      should.not.exist(errors)
      should.exist(body)
      done()
    })
  })

})