let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome?\n")
console.log(`Olá, ${nome}`)

let idade = rlSync.question("Qual sua idade?")
console.log(`Sua idade é: ${idade}`)
