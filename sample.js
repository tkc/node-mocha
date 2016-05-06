
//const AUTH_CODE = auth_code;
//const AUTH_MAIL = auth_mail;
//const CHANGE_PASSWORD = change_password;
//const LOGIN = login;
//const MAIL_DISABLE = mail_disable;
//const PICKER_AMS = picker_ams;
//const PICKER_PMs = picker_pms;
//const set_push_token = set_push_token;
//const SIGN_UP = sign_up;
//const USER = user;
//const USER_UPDATE = user_update;

require('es6-promise').polyfill();
require('isomorphic-fetch');

const urlencode = require('urlencode');
const FormData = require('form-data');
const url = "https://reg31.smp.ne.jp/regist/is?SMPFORM=memb-qepcq-3f678144297a99461b7d475b55bb091f";
const fs = require('fs');
const formData = new FormData();

var obj = {};
obj [ 'action' ] = 'picker_pms';
const objString = JSON.stringify(obj);
const postJson = urlencode(objString, 'gbk');

formData.append('json', postJson);

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

function maleJsonParam(params) {
  const formData = new FormData();
  var obj = {};
  obj [ 'action' ] = 'picker_pms';
  const objString = JSON.stringify(obj);
  const postJson = urlencode(objString, 'gbk');
  formData.append('json', postJson);
  return formData;
}
