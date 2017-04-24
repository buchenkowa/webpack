/**
 * Created by buchenkowa on 20.04.17.
 */

'use strict';

export default function(message) {

  if (NODE_ENV == 'development') {
    console.log(`For development ${message}`);
  }

  console.log(`Say ${message}`);
};