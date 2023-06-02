let temp = prompt("Digite uma temperatura (ou digite qualquer coisa que não seja um número para encerrar):");

if (isNaN(temp)) {
  document.write("Nenhuma temperatura foi informada.");
} else {
  temp = Number(temp);
  
  let soma_temp = temp;
  let cont_temp = 1;
  let menor_temp = temp;
  let maior_temp = temp;
  
  while (true) {
    temp = prompt("Digite uma temperatura (ou digite qualquer coisa que não seja um número para encerrar):");
  
    if (isNaN(temp)) {
      break;
    }
  
    temp = Number(temp);
  
    soma_temp += temp;
    cont_temp++;
  
    if (temp < menor_temp) {
      menor_temp = temp;
    }
  
    if (temp > maior_temp) {
      maior_temp = temp;
    }
  }
  
  let media_temp = soma_temp / cont_temp;
  
  document.write(`Menor temperatura informada: ${menor_temp}<br>`);
  document.write(`Maior temperatura informada: ${maior_temp}<br>`);
  document.write(`Média das temperaturas: ${media_temp}`);
}
