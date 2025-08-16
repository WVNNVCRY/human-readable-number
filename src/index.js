module.exports = function toReadable(number) {
  // единицы
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  // десятые
  const tens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  // десятые мульти
  const tensMulti = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 10) {
    return ones[number];
  }

  if (number < 20) {
    return tens[number - 10];
  }

  if (number < 100) {
    const tenPart = Math.floor(number / 10);
    const onePart = number % 10;
    return onePart
      ? `${tensMulti[tenPart]} ${ones[onePart]}`
      : `${tensMulti[tenPart]}`;
  }

  if (number < 1000) {
    const hundredPart = Math.floor(number / 100);
    const rest = number % 100;
    return rest
      ? `${ones[hundredPart]} hundred ${toReadable(rest)}`
      : `${ones[hundredPart]} hundred`;
  }
  if (number === 1000) {
    return 'one thousand';
  }

  return 'Number out of range';
};
