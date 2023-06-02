// While 
document.write("Usando o While<br>");
let i = 1; // Varíavel de controle
while (i <= 20){ // Teste condicional
    document.write(i + "<br>");
    i = i + 1; // incremento
}

document.write("------------------------<br>");
document.write("Usando o do While<br>");
let j = 1; // Variável de controle
do{
    document.write(j + "<br>");
    j++; // incremento
} while (j <= 20) // Teste lógico

document.write("------------------------<br>");
document.write("Usando o for<br>");
// Variável de controle, teste lógico e incremento
let k = 1;
for(; k <= 20; k++){ 
    document.write(k + "<br>");
}
console.log(k);


