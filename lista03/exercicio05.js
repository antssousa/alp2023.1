let sal_atual = Number(prompt("Digite o salário atual"));
let perc;

if (sal_atual <= 280){
    perc = 0.20;
} else if (sal_atual <= 700){
    perc = 0.15;
} else if (sal_atual <= 1500){
    perc = 0.10;
} else {
    perc = 0.05;
}

let aumento = sal_atual * perc;
let novo_sal = sal_atual + aumento;


document.write(`O salário antes do reajuste R$ ${sal_atual.toFixed(2)}<br>`);
document.write(`O percentual de aumento aplicado ${perc * 100}%<br>`);
document.write(`O valor do aumento R$ ${aumento.toFixed(2)}<br>`);
document.write(`O novo salário R$ ${novo_sal.toFixed(2)} <br>`);



