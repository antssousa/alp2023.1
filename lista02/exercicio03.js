let preco_gas = Number(prompt("Digite o preço da gasolina"));
let valor_abast = Number(prompt("Digite o valor que deseja abastecer"));

let quant_litros = valor_abast / preco_gas;

document.write(`Preço da gasolina = R$ ${preco_gas}<br>`);
document.write(`Quantidade em litros = ${quant_litros.toFixed(2)} litros`);