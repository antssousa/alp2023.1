let n = Number(prompt("Digite a quantidade de números ímpares que deseja"));

let impar = 1;
for(let i = 0; i < n; i++){
    document.write(impar + " ");
    impar = impar + 2;
}

document.write("<br>---------------------<br>");
for(let i = 0; i < n; i++){
    document.write((2 * i + 1 )+ " ");
}