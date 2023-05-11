let boleto = Number(prompt("Digite o valor do boleto"));

let juros = Number(prompt("Digite o valor dos juros"));

let dias_atrasado = Number(prompt("Digite a quantidade de dias em atraso"));

let valor_pago = boleto + (boleto * (juros / 100) * dias_atrasado);

document.write(`O valor da prestação é R$ ${valor_pago}`)