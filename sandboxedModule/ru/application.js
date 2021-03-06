// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');

// Подключение зависимостей
var application2 = require('./application2.js');

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  console.log('From application exported function');

};

module.exports.print = function(text,word) {

    for(i=0; i<=3;i++){
        console.log(text,word);
    }

}

module.exports.err= {

    func: function(num){
        console.log('gtrbfd')
    },
    number: 'fvbg'

};
module.exports.word = 'inversion';
//Работа с setTimeout и setInterval
var timeout = function(){
          console.log('Timeout: 3 seconds');
      }

    var interval = function(){
          console.log('Interval: 1 second');
      }
    var clear_interval = function(){
        clearInterval(interval_id);
        console.log('Interval cleared');
    }

var timeout_id = setTimeout(timeout, 3000);
var interval_id = setInterval(interval, 1000);

setTimeout(clear_interval,3000);

//Работа с util
var timestamp_id = asdfh.log('Use util.log()');
var format_id= asdfh.log(asdfh.format('%s,%s %d','Hello ', 'node v',5.6));

application2.SomeFunction();

for(var key in global) {
    console.log(key + ' ' + typeof (global[key]));
}

