/**
 * Created by buchenkowa on 24.04.17.
 */


document.getElementById('loginButton').onclick = function() {
  // require.ensure, динамическая подгрузка

  require.ensure([], function(require) {

    let login = require('./login');

    login();
  }, 'auth');

};

document.getElementById('logout').onclick = function() {
  require.ensure([], function(require) {

    let logout = require('./logout');

    logout();
  }, 'auth');


};