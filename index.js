var produtos = prompt ('Em qual produto você tem interesse?');

console.log("     ");

switch (produtos) {
  case "short" :
    console.log("Esta no valor de R$50,00");
    console.log("     ");
   var pagamento = prompt ("Qual a forma de pagamento?");
   console.log("     ");
   if (pagamento == 'debito') {
     console.log("voce ira receber um desconto de 5%");
     console.log(" o valor final sera, " + 47.5);
    } else {
  console.log("ok, iremos finalizar sua compra"); 
     } 
    console.log("     ");  
    var a = 'carregar'
    for(var i = 0; i < 3; i++){
    console.log("Espere um pouco. Estamos finalizando sua compra...")
    }
break;

case "camiseta":
    console.log("Esta no valor de R$21,00");
    console.log("     ");
     var pagamento = prompt ("Qual a forma de pagamento?");
     console.log("     ");
     if (pagamento == 'debito') {
     console.log("voce ira receber um desconto de 5%");
     console.log(" o valor final sera, " + 18.50 ); 
    } else {
  console.log("ok, iremos finalizar sua compra"); 
     } 
     console.log("     ");
    var a = 'carregar'
    for(var i = 0; i < 3; i++){
    console.log("Espere um pouco. Estamos finalizando sua compra...")
    }
  break;
  
case "calça":
     console.log("Esta no valor de R$80,00");
     console.log("     ");
     var pagamento = prompt ("Qual a forma de pagamento?");
     console.log("     ");
     if (pagamento == 'debito') {
     console.log("voce ira receber um desconto de 5%");
     console.log(" o valor final sera, " + 76.00 );
    } else {
  console.log("ok, iremos finalizar sua compra"); 
     }
     console.log("     "); 
    var a = 'carregar'
    for(var i = 0; i < 3; i++){
    console.log("Espere um pouco. Estamos finalizando sua compra...")
    }
   break;   
  
default: 
    console.log("O produto " + produtos + " nao esta disponivel");
}  
console.log ("    ");

var comprar = 0; 
while (comprar == 0){
var produto = prompt ("Deseja mais algumja coisa?")
console.log ("      ")
if (produto == 'sim') {
  console.log("ok");
  var repita = prompt ("O que você deseja?") 
  } else {
  console.log ("ok!")
  } 
  break;
} 

console.log("     ")

var lista = 0; 
do {
console.log("Retorne mais tarde..") 
  break;
} while (lista <5); 

