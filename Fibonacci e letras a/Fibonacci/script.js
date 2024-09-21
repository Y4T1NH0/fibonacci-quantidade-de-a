function fibonacci(){
    var termo = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('answer');
    var penultimo=0, ultimo=1;
    var numero;
  
    if(termo<=2)
     numero = termo-1;
    else{
     count=3;
     while(count<=termo){
      numero= ultimo + penultimo;
      penultimo = ultimo;
      ultimo=numero;
      count++;
     }
    }
  
    resposta.innerHTML=numero;
}  
