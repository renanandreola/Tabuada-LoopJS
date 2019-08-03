var num = parseInt(prompt("Digite um número para conferir sua tabuada:"));
var indice = 1

//repetir ate que o indice seja <= 10

while(indice <= 10) {
  document.write(num+ " x " + indice + " = " + (num*indice) + '<br>');
  indice = indice + 1;
}
  document.body.append("FIM DA TBUADA DE " + num);
