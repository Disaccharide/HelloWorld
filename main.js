var n = 3;
for (var j = 1; j <= n; j++) {
    var str = "";
    for (var i = 1; i <= n - j; i++) {
        str += " ";
    }
    for (var k = 1; k <= 2 * j - 1; k++) {
        str += "*";
    }
    console.log(str);
}
