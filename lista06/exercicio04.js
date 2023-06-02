let n = Number(prompt("Digite um número"));
// let cont_div = 0;

// for(let i = 1; i <= n; i++){
//     if (n % i == 0){
//         cont_div++;
//     }
// }

// if (cont_div == 2){
//     document.write(`${n} é primo`)
// } else {

//     document.write(`${n} não é primo`)
// }
let e_primo = true;

for(let i = 2; i <= (n/2); i++){
    if (n % i == 0){
        e_primo = false;
        break;
    }
}

if (e_primo && n >= 2){
    document.write(`${n} é primo`)
} else {

    document.write(`${n} não é primo`)
}