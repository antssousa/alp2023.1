let dec = Number(prompt("Digite um número decimal:"));
let bin = "";

while (dec > 0) {
  bin = (dec % 2) + bin;
  dec = Math.floor(dec / 2);
}

document.write(`O número binário equivalente é: ${bin}`);
