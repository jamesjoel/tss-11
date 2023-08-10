let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. indore Aperiam nam eaque aliquam doloremque indore accusantium deleniti illum quasi et ab repellendus sed id iste est quo qui, indore error libero facere! Blanditiis? Lorem ipsum dolor, indore sit amet consectetur indore adipisicing elit. Ex, aliquid repellendus? Adipisci fugiat commodi, eaque debitis indore eum minima aperiam nostrum ipsum beatae indore quisquam similique est consectetur indore provident id doloribus ut?";

// let para = "hello indore hello mumbai hello indore";

let data = para.split(" ");
let data2 = data.map(v=> v=="indore" ? "bhopal" : v);
let para2 = data2.join(" ");
console.log(para2)


