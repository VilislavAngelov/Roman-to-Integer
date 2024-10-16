let s = "LVIII";
let result = 0;

var romanToInt = function(s) {
    let sArr = s.split("");
    for (let i = 0; i <= s.length; i++) {
        switch (sArr[i]) {
            case 'I':
                result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
};

romanToInt(s);
console.log(result);