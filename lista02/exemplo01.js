function area(){
    const input = document.getElementById("raio");
    let raio = Number(input.value);
    let area = Math.PI * (raio ** 2);
    const h2 = document.getElementById("resultado");

    h2.innerText = "";
    h2.innerText = `A área do círculo de raio ${raio} cm é ${area.toFixed(2)} cm²`;
    console.log(`A área do círculo de raio ${raio} cm é ${area.toFixed(2)} cm²`);
    
}

document.write(``);
document.write(`<br>`);
