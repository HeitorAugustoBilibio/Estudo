let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A
let troca = "";

// Minha solução
troca = varC;
varC = varA;
varA = varB;
varB = troca;
//Solução vídeo
//[varA, varB, varC] = [varB, varC, varA]




console.log(varA, varB, varC)


