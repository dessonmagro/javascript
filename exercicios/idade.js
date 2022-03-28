var idade = 19;

/*
if (idade >= 18)
console.log("Pode comprar.");
                                    forma mais simples
else
console.log("Não pode comprar.");
*/

if (idade >= 18 && <=70) {                  // maior ou igual a 18 E menor ou igual a 70 
    console.log("Pode comprar.");  
    console.log("Qual o seu pedido?")
}

/*
else if (idade >= 18){                              // se for mais de uma linha, tem que abrir chaves para ler tudo.
    console.log('Pode comprar');
    console.log('Mostre sua identidade.')       apenas para mostrar identidade.
}
*/

else {
console.log("Não pode comprar.");
console.log('Volte quando for maior de idade.')
}