const args1 = Number(process.argv.slice(2,3));
const args2 = Number(process.argv.slice(3));
const color = ['green', 'yellow', 'red'];
let colorItem = 0;

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
        console.log(j, color[colorItem]);
        colorItem++;
        if (colorItem>color.length-1) colorItem=0;
    }
}} else {
console.log('Введите числовые значения'); 
// break;
}
