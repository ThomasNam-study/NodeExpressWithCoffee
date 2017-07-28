require('./../css/common.css');
require('./../img/20170726_164455_139.jpg');

var hello = require('./hello');
var world = require('./world');
var myCoffee = require('./../coffee/my.coffee');


myCoffee();
document.write(hello + ", " + world + '!');
