function esPrimo(numero) {
    
    for(let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;

    return numero > 1;
}  

for (let i = 0; i <= 100; i++) {

    if (esPrimo(i))
        console.log("El número " + i + " es primo");

}


