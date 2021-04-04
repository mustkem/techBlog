function calculate() {
  const rate = 5;
  return {
    intrest: function (principal, time) {
      return (principal * rate * time) / 100;
    },
    totalAccruedAmount: function (principal, time) {
      return principal + (principal * rate * time) / 100;
    },
  };
}

const calculater = calculate();

console.log(calculater.intrest(5));
console.log(calculater.totalAccruedAmount(1000, 5));
