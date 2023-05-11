let n = Number(prompt("Digite um número"));

if (n > 0){
    document.write(`${n} é positivo`);
} else if (n < 0){
    document.write(`${n} é negativo`);
} else{
    document.write(`O zero foi digitado`);
}
