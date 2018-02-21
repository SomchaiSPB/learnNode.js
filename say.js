const sayHi = require('./sayHello');

sayHi('name.txt', 'file' + new Date().getTime().toString().slice(10) + '.txt');