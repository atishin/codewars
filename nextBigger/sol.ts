function combine(digits: number[]) {
    return parseInt(digits.join(''));
}

function swap(x: number, y: number, digits: number[]) {
    const t = digits[x];
    digits[x] = digits[y];
    digits[y] = t;
    return digits;
}

function getMinMax(digits, n) {
    let res = -1;
    for (let i = n + 1; i < digits.length; i++) {
        if (digits[i] > digits[n] && (res == -1 || digits[i] < digits[res])) {
            res = i;
        }
    }
    return res;
}

function check(n: number, digits: number[]) {
    const minMax = getMinMax(digits, n);
    if (minMax != -1) {
        digits = swap(minMax, n, digits);
        digits = [...digits.slice(0, n + 1), ...digits.slice(n + 1, digits.length).sort()];
        return combine(digits);
    }
    return false;
}

function nextBigger(n: number) {
    const digits = n.toString().split('').map(d => parseInt(d));

    for (let i = digits.length - 2; i >= 0; i--) {
        const checked = check(i, digits);
        if (checked) {
            return checked;
        }
    }

    return n;
}

// console.log(12, nextBigger(12), 21);
// console.log(513, nextBigger(513), 531);
// console.log(2017, nextBigger(2017), 2071);
// console.log(414, nextBigger(414), 441);
// console.log(144, nextBigger(144), 414);
// console.log(1, nextBigger(1), 1);
// console.log(505643, nextBigger(505643), 242);