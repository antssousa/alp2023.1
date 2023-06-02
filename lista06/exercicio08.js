let idade;
let soma_maiores = 0;
let cont_maiores = 0;
let media_maiores = 0;

do {
  idade = Number(prompt("Digite a idade (ou uma idade negativa para encerrar):"));

  if (idade >= 0) {
    if (idade >= 18) {
      soma_maiores += idade;
      cont_maiores++;
    }
  }
} while (idade >= 0);

if (cont_maiores != 0) {
  media_maiores = soma_maiores / cont_maiores;
}

document.write(`Soma das idades das pessoas maiores de idade: ${soma_maiores}<br>`);
document.write(`Média de idade das pessoas maiores de idade: ${media_maiores}`);
