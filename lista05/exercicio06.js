let n = Number(prompt("Digite um número"));
let soma = 0;
for(let i = 1; i <= n; i++){
    soma += i; // soma = soma + i;
}

let media = soma / n;

document.write(`A média dos ${n} primeiros números naturais é ${media.toFixed(2)}`);
