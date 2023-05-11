let anos = Number(prompt("Digite quantos anos você tem"));
let meses = Number(prompt("Digite quantos meses você tem"));
let dias = Number(prompt("Digite quantos dias você tem"));

let dias_vividos = anos * 365 + meses * 30 + dias;

document.write(`Total da idade em dias é ${dias_vividos}`)