function CountNumber(number) {
    if (number < 0) return false;
    number_zero_to_nine = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    number_ten_to_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    number_twenty_to_ninety = ['twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];
    if (number === 0) return 'zero'

    function translatenumber(number) {
        word = ""
        if (number < 10) {
            word = number_zero_to_nine[number] + ' '
        } else if (number < 20) {
            word = number_ten_to_nineteen[number - 10] + ' '
        } else if (number < 100) {
            rem = translatenumber(number % 10)
            word = number_twenty_to_ninety[(number - number % 10) / 10 - 2] + ' ' + rem
        } else if (number < 1000) {
            word = number_zero_to_nine[Math.trunc(number / 100)] + ' Hundred ' + translatenumber(number % 100)
        } else if (number < 1000000) {
            word = translatenumber(parseInt(number / 1000)).trim() + ' Thousand ' + translatenumber(number % 1000)
        } else if (number < 1000000000) {
            word = translatenumber(parseInt(number / 1000000)).trim() + ' Million ' + translatenumber(number % 1000000)
        } else {
            word = translatenumber(parseInt(number / 1000000000)).trim() + ' Billion ' + translatenumber(number % 1000000000)
        }
        return word
    }
    result = translatenumber(number)
    return result.trim()
}
const newnumber = document.getElementById('Input').value;
newnumber = number;
if (number === "") {
    console.log("Please enter a number to translate.");
}

function showMessage() {
    console.log(CountNumber(number));
}