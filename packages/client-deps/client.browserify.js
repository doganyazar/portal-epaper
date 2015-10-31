console.log("example1 browserify.js");

RBS = require('react-bootstrap'); // export it 'globally' so Meteor is happy and can `api.export` it in package.js


if (process.env.NODE_ENV === 'production')
  console.log('it\'s production!!');
else
  console.log('it\'s development...');
