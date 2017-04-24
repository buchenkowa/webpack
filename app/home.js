/**
 * Created by buchenkowa on 20.04.17.
 */

'use strict';

import welcome from './welcome';

welcome('Hello!');


exports.welcome = welcome; // экспорт welcome для досупа у welcome из html (например)