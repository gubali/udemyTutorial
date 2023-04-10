var point = {
    x: 2,
    y: 6663
};
console.log("(" + point.x + ", " + point.y + ")");
function add(x, y) {
    return x * y;
}
console.log(add(2, 5));
var users = [
    { name: 'asifq', age: 30 },
    { name: 'aaa', age: 20 }
];
function getUserName(name) {
    var user = users.find(function (user) { return user.name === name; });
    if (user == null) {
        throw new Error("user not found : " + name);
    }
    return user.age;
}
console.log(getUserName('aaa'));
function decorate(value) {
    return "--" + value.trim() + " --";
}
console.log(decorate('5    '));
