function Kvs(path) {
    var Datastore = require('nedb'),
        db = new Datastore({
            filename: path,
            autoload: true
        });
    var self = this

    var _get = function(_key, callback) {
        db.findOne({
            key: _key
        }, function(err,data){
          if(!data){
            data = false
          }
          callback(data['value'])
        })
    }

    var _set = function(_key, _value, callback) {
        db.update({
            key: _key
        },{
            key: _key,
            value: _value
        },{
          upsert:true,
          multi:true
        }, callback)
    }

    return {
      get:_get,
      set:_set
    }
}

module.exports = Kvs;