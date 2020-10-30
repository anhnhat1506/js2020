var obj = { name: "Nhat" };
var greeting = function(a, b, c) {
    return "Hello " + this.name + " to " + a + "," + b + " in " + c;
}
var bound = greeting.bind(obj);
console.dir(bound);
console.log("Output using .bind() below");
console.log(bound("Ham Thuan Bac", "Phan Thiet", "Binh Thuan"));