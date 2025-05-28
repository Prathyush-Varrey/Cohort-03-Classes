function setTimeOutPromisfied(ms) {
     return new Promise(res => setTimeout(res, ms));
};

function callback() {
     console.log(`Print after 3 sec`)
};
for (let i = 0; i <= 2; i++){
     console.log(i);
}
setTimeOutPromisfied(3000).then(callback)

function after3s(res) {
     setTimeout(res,3000)
};

function main() {
     console.log(`main is called`);
};
after3s(main)