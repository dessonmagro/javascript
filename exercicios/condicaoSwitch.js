var nota1 = 5.5;
var nota2 = 9;
var media = (nota1 + nota2) / 2;

/*
if (media >= 7) {
    console.log('Você passou.')   ------------ aqui modo simples de fazer
}
else {
    console.log("Sua nota foi: " + media + ' Você esta reprovado(a).')
}
*/
var conceito= ""

if (media >=9) {
    conceito = "Ótimo";
}

else if (media >=7) {
    conceito= "Bom";
}

else {
    conceito = "Regular";
}

console.log(media);
console.log(conceito);

switch(conceito){          // com o switch consegue usar CASE... 

    case "Ótimo":
        console.log("Parabéns, você foi muito bem.")
        break;
    case "Bom":
        console.log("Você foi bem, continue se esforçando.")
        break; 
    case "Regular":
        console.log("você precisa estudar mais.")
        break;
    case "default":
        console.log("ERRO - aconteceu algo errado.")
        break;
}
