let valor = Number(prompt("Digite o valor da compra"));

let desconto = valor * 0.3;

let pago = valor - desconto;

document.write(`O valor do desconto foi de R$ ${desconto.toFixed(2)} e a compra ficou R$ ${pago.toFixed(2)}`);