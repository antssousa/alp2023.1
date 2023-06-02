// let nota;
// do{
//     nota = Number(prompt("Digite uma nota entre 0 e 10"));
//     if (nota < 0 || nota > 10){
//         alert("Digite uma nota válida")
//     }
// } while(nota < 0 || nota > 10);
// alert("Parabéns você digitou uma nota válida");

// for(;;){
//     let nota = Number(prompt("Digite uma nota entre 0 e 10"));
//     if(nota < 0 || nota > 10){
//         alert("Nota inválida");
//     } else {
//         alert("Nota válida");
//         break;
//     }
// }




for(;;){
    let nota = Number(prompt("Digite uma nota entre 0 e 10"));
    if((nota < 0 || nota > 10) || nota == "" || isNaN(nota)){
        alert("Nota inválida");
    } else {
        alert("Nota válida");
        break;
    }
}

