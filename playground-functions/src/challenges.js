// Desafio 1
function compareTrue(bol1, bol2) {
  return bol1 && bol2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  const maxNumber = Math.max(...array);

  return array.reduce(
    (acc, number) => (number === maxNumber ? acc + 1 : acc),
    0,
  );
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const absCat1 = Math.abs(mouse - cat1);
  const absCat2 = Math.abs(mouse - cat2);

  if (absCat1 > absCat2) {
    return 'cat2';
  } if (absCat1 < absCat2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  return array.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    }
    if (number % 3 === 0) {
      return 'fizz';
    }
    if (number % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(string) {
  return string
    .replaceAll('a', 1)
    .replaceAll('e', 2)
    .replaceAll('i', 3)
    .replaceAll('o', 4)
    .replaceAll('u', 5);
}

function decode(string) {
  return string
    .replaceAll(1, 'a')
    .replaceAll(2, 'e')
    .replaceAll(3, 'i')
    .replaceAll(4, 'o')
    .replaceAll(5, 'u');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
