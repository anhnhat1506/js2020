var obj = { name: "Anh Nhat" };
var greeting = function(a, b, c) {
    return "Hello " + this.name + " to " + a + "," + b + " in " + c;
}
console.log(greeting.call(obj, "Ham Thuan Bac", "Phan Thiet", "Binh Thuan"));