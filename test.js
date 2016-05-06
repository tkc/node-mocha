require('es6-promise').polyfill();
require('isomorphic-fetch');
require('es6-promise').polyfill();
require('isomorphic-fetch');
var assert = require('power-assert');
var FormData = require('form-data');

const url = "https://reg31.smp.ne.jp/regist/is?SMPFORM=memb-qepcq-3f678144297a99461b7d475b55bb091f";
var formData = new FormData();
formData.append('json', '%7B%20%22action%22%3A%20%22picker_pms%22%7D');

describe('fetch', function () {
  describe('test', function () {
    it('引数に応じて決まった文字列を返すこと', function () {
      //assert(false);
      fetch(
        url, {
          method: 'POST',
          body: formData
        }).then(function (response) {
          return response.json();
        })
        .then(function (stories) {
          console.log(stories);
        });
      //assert.equal(myModule.greet('taro'), 'Hello,taro');
    });
  });
});

function getSuccessPromise() {
  return Promise.resolve(true);
}

it("is 終わらないテスト", function (done) {
  Promise.resolve(false).then(function (value) {
    assert(value);
    done();
  });
});

//describe('various types', function(){
//  function Person(name, age) {
//    this.name = name;
//    this.age = age;
//  }
//  beforeEach(function(){
//    this.types = [
//      'string', 98.6, true, false, null, undefined,
//      ['nested', 'array'],
//      {object: true},
//      NaN, Infinity,
//      /^not/,
//      new Person('alice', 3)
//    ];
//  });
//  it('demo', function(){
//    var index = this.types.length -1,
//      bob = new Person('bob', 5);
//    assert(this.types[index].name === bob.name);
//  });
//});
