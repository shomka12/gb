const args1 = +process.argv.slice(2,3);
const args2 = +process.argv.slice(3);

for (let j=args1;j<=args2;j++){
let flag = true;
for (let i = 2; i < j; i++) {
	if (j % i == 0) {
		flag = false;
		break;
	}
}
    if (flag) console.log(j,flag);
}

