// Сума з використанням циклу
function SumTo(n) {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    result = result + i;
  }

  return result;
}

console.log(`Сумма через цикл: ${SumToRec(100)}`);

// Сума з використанням рекурсії

function SumToRec(n) {
  if (n === 1) return 1;

  return n + SumToRec(n - 1);
}

console.log(`Сумма через рекурсію: ${SumToRec(100)}`);
