/**
 * Created by buchenkowa on 24.04.17.
 */


document.getElementById('loginButton').onclick = function() {
  // require.ensure, динамическая подгрузка

  require.ensure(['./login'], function(require) {

    let login = require('./login');

    login();
  });

};

document.getElementById('logout').onclick = function() {
  require.ensure(['./logout'], function(require) {

    let logout = require('./logout');

    logout();
  });


};