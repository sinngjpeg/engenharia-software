Algoritmo "Multiplicacao10NumerosA"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Ingrid Silva
// Data atual  : 12/11/2024
Var
// Se��o de Declara��es das vari�veis 
numero, multiplicacao : real
contador: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
multiplicacao <- 1
contador <- 1

Enquanto contador <= 10 fa�a
Escreva("Digite  o" , contador, "� numero:")
Leia(numero)
multiplicacao <- multiplicacao * numero
contador <- contador + 1
FimEnquanto

Escreva("O resultado da multiplica��o �: ", multiplicacao)

Fimalgoritmo