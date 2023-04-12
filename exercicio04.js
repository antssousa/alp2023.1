let n = Number(prompt("Digite um número"));

let mod = (n ** 2) ** 0.5;
// let mod = Math.sqrt(Math.pow(n, 2));
// let mod = n < 0 ? -n: n;

document.write(`O módulo de ${n} é ${mod}`)