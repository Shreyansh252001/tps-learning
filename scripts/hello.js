"use strict";
/* console.log("Hello World");

function greetPerson(name){
    if(name=="")
        var greet="Please specify your name for greetings!";
    else
        var greet="Hi"+name;

    console.log(greet);
}

greetPerson("Shreyansh Shukla");
greetPerson("");

var a=1,b=2;

console.log(a);
console.log(b);

if(a==1)
{
    let a=10,b=11;
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);

 */
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
for (var i = 0; i < 10000; i++) {
    _loop_1(i);
}
var num1;
var num2 = 0;
var obj = {
    name: "Shreyansh"
};
console.log(obj.name);
var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue);
