let n = Number(prompt("Digite um número"));

let fat = 1;

for (let i = n; i > 0; i--) {
    fat = fat * i;
}

document.write(`${n}! =${fat}`);