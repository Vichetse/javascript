function isPalindrome(number) {
    if (number < 0) {
        return false;
    }

    let reversed = 0;
    let original = number;
    while (original > 0) {
        let remainder = original % 10;
        reversed = reversed * 10 + remainder;
        original = parseInt(original / 10);
    }
    return number === reversed;
}
console.log(isPalindrome(54345));
console.log(isPalindrome(45324));