// ENTRADA
let raio = Number(prompt("Digite o raio da lata"));
let h = Number(prompt("Digite a altura da lata"));

// PROCESSAMENTO
let v = Math.PI * (raio ** 2) * h;

// SAÍDA    
document.write(`O volume da lata de raio ${raio} cm e altura ${h} cm é ${v.toFixed(2)} cm³`);