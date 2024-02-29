function interractWithBot(sentence) {
  if (sentence.endsWith("?")) {
    return "Ouais Ouais ...";
  }

  if (sentence.length > 0 && sentence === sentence.toUpperCase()) {
    return "Pwa, calme toi ...";
  }

  if (sentence.toLowerCase().includes("fortnite")) {
    return "on s'fait une partie soum-soum ?";
  }

  if (sentence.length === 0) {
    return "T'es en PLS ou quoi?";
  }

  else
    return "Balek";
}

const userInput = prompt("Qu'est-ce que tu veux ?");
const responseBot = interractWithBot(userInput);

console.log(responseBot);
