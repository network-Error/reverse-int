module.exports = function reverse (n) {

    let num = n + '';

    if (num < 0) {
        let minusNum = Math.abs(num);
        let toStringNum = String(minusNum);
        let toNumMinus = toStringNum.split('').reverse().join('');

        return Number(toNumMinus);
    } else {
        let reverseEl = num.split('').reverse().join('');
        let toNum = Number(reverseEl);

        return toNum;
    }
}
