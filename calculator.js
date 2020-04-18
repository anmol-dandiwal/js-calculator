add = function(x, y){
    return x + y;
}

sub = function(x, y){
    return x - y;
}

mul = function(x, y){
    return x * y;
}

div = function(x, y){
    return x / y;
}

operate = function(x, y, op){
    switch (op){
        case "+":
            return add(x, y);
        case "-":
            return sub(x, y);
        case "x":
            return mul(x, y);
        case "/":
            return div(x, y);
    }
}

console.log(operate(1, 2, "+"));