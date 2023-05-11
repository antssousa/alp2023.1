let real = Number(prompt("Digite o valor em reais"));
let dolar = Number(prompt("Digite o valor do dólar"));

let valor = real / dolar;

let time = Date.now();
let hoje = new Date(time);

document.write(`Cotação do dólar no dia ${hoje.toLocaleDateString()} é U$ ${dolar}`);
document.write(`<br>`);
document.write(`R$ ${real} = U$ ${valor}`);
