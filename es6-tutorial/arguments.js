function add(x, y = 1, z = 2) {
    console.log(arguments.length);
    return x + y + z;
}
add(10);
add(10, 20);
add(10, 20, 30);