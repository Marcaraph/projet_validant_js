function traduireARN(arn) {
  const codeGénétique = {
    UCU: "Sérine",
    UCC: "Sérine",
    UCA: "Sérine",
    UCG: "Sérine",
    AGU: "Sérine",
    AGC: "Sérine",
    CCU: "Proline",
    CCC: "Proline",
    CCA: "Proline",
    CCG: "Proline",
    UUA: "Leucine",
    UUG: "Leucine",
    UUU: "Phénylalanine",
    UUC: "Phénylalanine",
    CGU: "Arginine",
    CGC: "Arginine",
    CGA: "Arginine",
    CGG: "Arginine",
    AGA: "Arginine",
    AGG: "Arginine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
  };
  const codons = arn.match(/.{1,3}/g);
  const protéine = codons.map(codon => codeGénétique[codon]).join("-");
  return protéine;
}

// ARN TO TRANSLATE
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

// FUNCTION FOR THE ARN + CONSOLE.LOG
console.log("First ARN : " + traduireARN(arn1));
console.log("Second ARN : " + traduireARN(arn2));