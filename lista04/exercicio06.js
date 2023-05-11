let num = Number(prompt("Digite um número"));

if (num < 0 ){
    document.write(`(${num})² = ${Math.pow(num, 2)}`);
} else {
    document.write(`√${num} = ${Math.sqrt(num)}`);
}