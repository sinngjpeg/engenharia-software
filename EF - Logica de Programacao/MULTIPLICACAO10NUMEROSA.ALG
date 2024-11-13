Algoritmo "Multiplicacao10NumerosA"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Ingrid Silva
// Data atual  : 12/11/2024
Var
// Seção de Declarações das variáveis 
numero, multiplicacao : real
contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
multiplicacao <- 1
contador <- 1

Enquanto contador <= 10 faça
Escreva("Digite  o" , contador, "º numero:")
Leia(numero)
multiplicacao <- multiplicacao * numero
contador <- contador + 1
FimEnquanto

Escreva("O resultado da multiplicação é: ", multiplicacao)

Fimalgoritmo