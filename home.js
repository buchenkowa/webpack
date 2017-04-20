/**
 * Created by buchenkowa on 20.04.17.
 */

'use strict';

const welcome = require('./welcome.js');

welcome('Hello!');
welcome('Hello, my friend !');

exports.welcome = welcome; // экспорт welcome для досупа у welcome из html (например)