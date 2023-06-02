let soma = 0; // Acumuladoras

for(let i = 0; i < 5; i++){
    let n = Number(prompt(`Digite o ${i + 1}º número`));
    soma = soma + n; // soma += n;
}

document.write(`A soma é ${soma}`);