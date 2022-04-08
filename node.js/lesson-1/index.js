const colors = require("colors/safe");
const args1 = Number(process.argv.slice(2,3));
const args2 = Number(process.argv.slice(3));

let colorItem = 0;
let z=false;
if (!isNaN(args1) && !isNaN(args2)) {
    for (let j=args1;j<=args2;j++){
    let flag = true;
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {
            flag = false;
            break;
        }
    }
        if (flag) {
            z=true
            switch (colorItem) {
                case 0: 
                    console.log(colors.green(j));
                    break;
                case 1: 
                    console.log(colors.yellow(j));
                    break;
                case 2: 
                    console.log(colors.red(j));
                    break;
            }
            colorItem++;
            if (colorItem>2) colorItem=0;
        }
    }
} else {
        console.log(colors.red('Введите числовые значения')); 
        z=true;
    }
    
if (!z) console.log(colors.red('Простых чисел нет'))

