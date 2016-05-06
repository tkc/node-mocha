require('es6-promise').polyfill();
require('isomorphic-fetch');
require('es6-promise').polyfill();
require('isomorphic-fetch');
const assert = require('power-assert');
const FormData = require('form-data');

it("api success", function () {
  return getSuccessPromise().then(function (res) {
    console.log(res);
    assert(true);
  }).catch(function (error) {
    assert(false);
  });
});

function getSuccessPromise() {

  const url = "local.host";
  const formData = new FormData();
  formData.append('json', 'json');

  return new Promise(function (resolve, reject) {
    fetch(
      url, {
        method: 'POST',
        body: formData
      }).then(function (response) {
        return response.json();
      })
      .then(function (stories) {
        return resolve(stories);
      })
      .catch(function (error) {
        return reject(error);
      });
  });
  
}
