let a,b;
do{
    a = parseInt(prompt("nhập vào số a:"));
    b = parseInt(prompt("nhập vào số b:"));
}while(a > b);

let total = 0;
for(let index = a; index < b; index++){
    if (index%1 === 0 && index%index ===0) {
        total +=index;
    }
}
window.alert(total);