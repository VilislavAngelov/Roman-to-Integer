let s = "LVIII";
let result = 0;

var romanToInt = function(s) {
    let sArr = s.split("");
    for (let i = 0; i <= s.length; i++) {
        switch (sArr[i]) {
            case 'I':
                if(sArr[i+1] == 'V'){
                    result += 4;
                    i++;
                    break;
                } else if (sArr[i+1] == 'X') {
                    result += 9;
                    i++;
                    break;
                }
                result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                if(sArr[i+1] == 'L'){
                    result += 40;
                    i++;
                    break;
                } else if (sArr[i+1] == 'C') {
                    result += 90;
                    i++;
                    break;
                }
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                if(sArr[i+1] == 'D'){
                    result += 400;
                    i++;
                    break;
                } else if (sArr[i+1] == 'M') {
                    result += 900;
                    i++;
                    break;
                }
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