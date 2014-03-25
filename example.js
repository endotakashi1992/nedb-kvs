var Kvs = require('./index.js')
var test = Kvs('./test.db')

//set data
test.set('name', 'takashiiii')

//get data
test.get('name', function(data) {
    console.log(data)
})