function caracter() {
    var palavra = document.getElementById("name").value; // Pega o valor do input
    var resposta = document.getElementById("a"); // Elemento onde será exibida a resposta
    var contador = 0; // Variável para contar quantas vezes 'a' aparece

    // Loop para percorrer a string
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() === "a") {
            contador++; // Incrementa o contador sempre que achar 'a'
        }
    }

    // Exibe a resposta na tela
    if (contador > 0) {
        resposta.textContent = `A palavra "${palavra}" possui ${contador} letras 'a'.`;
    } else {
        resposta.textContent = `A palavra "${palavra}" não possui a letra 'a'.`;
    }
}
