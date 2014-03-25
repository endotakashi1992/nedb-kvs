#Simple is best!!
nedb-kvs is simple kvs database.It it base on NeDB.

#Get Started

```javascript:app.js
var Kvs = require('nedb-kvs')
var test = Kvs('./test.db')

//set data
test.set('name', 'takashiiii')

//get data
test.get('name', function(data) {
    console.log(data)
})
```

#Author
name:EndoTakashi  
email:endotakashi1992@icloud.com  
twitter:https://twitter.com/kyouzyuuuuuuuu1

#License
MIT license

####below is Japanese

#やっぱりシンプルが一番だよね〜
nedb-kvsはシンプルなkey-valueデータベースです。作るにあたり、NeDBというモジュールを元にしています。

#さっそくだけど、使ってみよう
```javascript:app.js
var Kvs = require('nedb-kvs')
var test = Kvs('./test.db')

//データをセットする
test.set('name', 'takashiiii')

//データを入手する
test.get('name', function(data) {
    console.log(data)
})
```

#作者
遠藤孝志  
email:endotakashi1992@icloud.com  
twitter:https://twitter.com/kyouzyuuuuuuuu1

#ライセンス
MITライセンスで公開中です。