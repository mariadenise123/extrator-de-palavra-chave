function processaTexto(texto) {
  let palavras = texto.split(/\P{L}+/u);

  let frequencias = {};

  for (let i of palavras) {
    frequencias[i] = 0;

    for (let j of palavras) {
      if (i == j) {
        frequencias[i]++;
      }
    }
  }

  console.log(frequencias);

  return palavras;
}