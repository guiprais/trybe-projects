// Desafio 10
function techList(array, name) {
  return array.length === 0
    ? 'Vazio!'
    : array
      .sort()
      .map((tech) => ({ tech, name }));
}

// Desafio 11
const getOccurrences = (array, value) => (
  array.reduce((acc, item) => (
    value === item ? acc + 1 : acc
  ), 0)
);

const createPhoneNumber = (arr) => {
  let mask = '(xx) xxxxx-xxxx';

  arr.forEach((item) => {
    mask = mask.replace('x', item);
  });

  return mask;
};

function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const validateNumbers = phone.some((number) => number > 9 || number < 0);
  const everyOccurrence = phone.map((number) => getOccurrences(phone, number));
  const someNumberRepeatsThreeOrMore = everyOccurrence.some((number) => number > 2);

  if (someNumberRepeatsThreeOrMore || validateNumbers) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return createPhoneNumber(phone);
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(welcome) {
  const cups = welcome
    .match(/\d+/g)
    .reduce((acc, number) => acc + parseInt(number, 10), 0);

  return `${cups} ${cups > 1 ? 'copos' : 'copo'} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
