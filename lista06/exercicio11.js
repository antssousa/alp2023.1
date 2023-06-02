let n = Number(prompt("Digite um número inteiro positivo:"));
let inv = 0;

while (n > 0) {
  let digito = n % 10;
  inv = inv * 10 + digito;
  n = Math.floor(n / 10);
}

document.write(`O número invertido é: ${inv}`);
