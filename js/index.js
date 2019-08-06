var num = parseInt(prompt("Digite um número para conferir sua tabuada:"));
var index = 1

//repetir ate que o indice seja <= 10
//wile = enquanto = loop

while(index <= 10) {
  document.write(num+ " x " + index + " = " + (num*index) + '<br>');
  index = index + 1;
}
  document.body.append("FIM DA TBUADA DE " + num);
