var txt = ""
var numbers = [45, 4, 9, 16, 25]
numbers.forEach(myFunction)
    // document.getElementById("demo").innerHTML = txt
console.log(txt);

function myFunction(value) {
    txt = txt + value + "<br>"
}