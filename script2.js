function factioral(n) {
  if (n === 0) return 1;
  return n * factioral(n - 1);
}

let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log("Le résultat est : " + factioral(num));