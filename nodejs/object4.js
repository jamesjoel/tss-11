let user = {
    name : "rohit",
    age : 25,
    city : "indore",
    address : "mg road",
    fathername : "vishal",
    mothername : "lata"
};

let {...info} = user; // copy data into info

user.name = "amar"; 

console.log(user)
console.log(info)