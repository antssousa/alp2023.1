let n = Number(
  prompt(
    "Digite a quantidade de elementos da sequência de Fibonacci que deseja imprimir:"
  )
);

let ant = 0;
let fib = 1;

document.write("Sequência de Fibonacci: ");

for (let i = 1; i <= n; i++) {
  document.write(fib + " ");
  let aux = fib;
  fib = ant + fib;
  ant = aux;
}
