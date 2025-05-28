function setTimeOutPromisfied(ms) {
     return new Promise(res => setTimeout(res, ms))
};

setTimeOutPromisfied(1000)
     .then(function () {
          console.log(`hi`);
          return setTimeOutPromisfied(3000)
     }).then(function () {
          console.log(`hello`);
          return setTimeOutPromisfied(5000)
     }).then(function () {
          console.log(`hello there`);
     })