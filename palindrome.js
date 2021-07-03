function palindrome(kata) {
    let arr = [];
    for (i = kata.length - 1; i >= 0; i--) {
        arr.push(kata[i]);
    }
    hasil = arr.join("");
    return hasil === kata;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false