let x = require("word-count");
let y = require("reverse-string");
// let format = require("date-format");

let format = require("date-format-ms");

let a = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga fugiat commodi quia at, quis ipsam est laudantium sequi dicta eaque veniam nulla non dolorum eum provident velit? Repellat, itaque sint? consectetur, adipisicing elit. Fuga fugiat commodi quia at, quis ipsam est laudantium sequi dicta eaque veniam nulla non dolorum eum provident velit? Repellat, itaque sint?";

let b = "rohit verma"; // tihor


let ans = x(a);
let z = y(b);


let d = format.dateToLocalFormat(new Date(), 'D d/M/Y');
console.log(d);




