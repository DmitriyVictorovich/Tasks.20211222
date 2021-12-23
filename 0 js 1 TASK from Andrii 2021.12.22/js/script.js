let a = 51;
let b = 50;

// ВАРИАНТ 1
if (a === 100 || b === 100 || (a + b) === 100 || (a - b) === 100) {
    console.log(true);
} else {
    console.log(false);
}

// ВАРИАНТ 2
if (a === 100 || b === 100) {
    console.log(true);
} else if ((a + b) === 100) {
    console.log(true);
} else if ((a - b) === 100) {
    console.log(true);
} else {
    console.log(false);
}

// ВАРИАНТ 3
function math() {
    if (a === 100 || b === 100) {
        return true;
    }
    if ((a + b) === 100) {
        return true;
    }
    if ((a - b) === 100) {
        return true;
    }
    return false;
}
console.log(math());