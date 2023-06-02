let n;
let cont_pares = 0;
let cont_impares = 0;
let soma_pares = 0;
let soma = 0;
let media_pares = 0;
let media_geral = 0;

do {
  n = Number(prompt("Digite um número (ou zero para encerrar a leitura):"));

  if (n != 0) {
    soma += n;
    media_geral++;
  
    if (n % 2 == 0) {
      cont_pares++;
      soma_pares += n;
      media_pares++;
    } else {
      cont_impares++;
    }
  }
} while (n != 0);

if (media_geral != 0) {
  media_geral = soma / media_geral;
}

if (media_pares != 0) {
  media_pares = soma_pares / media_pares;
}

document.write(`Quantidade de números pares: ${cont_pares}<br>`);
document.write(`Quantidade de números ímpares: ${cont_impares}<br>`);
document.write(`Média dos números pares: ${media_pares}<br>`);
document.write(`Média geral dos números lidos: ${media_geral}`);
