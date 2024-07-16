const formatCurrency = (money: number) => {
  if (money) {
    return money.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
};
const formatDecimal = (count: number) => {
  if (count) {
    return count.toLocaleString('pt-BR', {
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
