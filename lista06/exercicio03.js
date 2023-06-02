let deposito = Number(prompt("Digite o depósito incial"));
let tx = Number(prompt("Digite a taxa da poupança"));

let juros = 0;
let juros_total = 0;
tx = tx / 100;
let saldo = deposito;

for(let i = 1; i <= 24; i++){
    juros = saldo * tx;
    juros_total = juros_total + juros;
    saldo = saldo + juros;
    document.write(`O saldo no mês ${i} = R$ ${saldo.toFixed(2)}<br>`);
}

document.write(`O juros total do período é R$ ${juros_total.toFixed(2)}`);