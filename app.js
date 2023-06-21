const fromEuroToDollar = function(amount) {
    return 1.2 * amount;
}

const fromDollarToYen = function(amount) {
    return Math.round(139.26 * amount * 1e2) / 1e2;
}

const fromYenToPound = function (amount) {
    return Math.round(0.0058 * amount * 1e4) / 1e4;
}

const sum = function sum(a, b) {
    return a + b;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound, sum};