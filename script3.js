let stores = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? :")
console.log(stores)

for(let i = 0; i <= stores; i++){
  console.log(" ".repeat(stores - i) + "#".repeat(i));
}