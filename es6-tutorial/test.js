function say(message) {
    console.log(message);
}
say();

function say1(message1) {
    message1 = typeof message1 !== 'undefined' ? message1 : "Hello Anh Nhật";
    console.log(message1);
}
say1();