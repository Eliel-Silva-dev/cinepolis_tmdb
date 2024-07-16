const formatCurrency = (number: number) => {
  if (number) {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
};
const formatDecimal = (number: number) => {
  if (number) {
    return number.toLocaleString('pt-BR', {
      style: 'decimal',
    });
  }
};
const numberFixed = (number: number) => {
  if (number) {
    return number.toFixed(1);
  }
};

export { formatCurrency, formatDecimal, numberFixed };
