export function transformMoney(money: number) {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',

    // This is the default
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function transformMoneyToNumber(money: string) {
  return Number(money.replace(/[^0-9.-]+/g, ''));
}

export function transformMoneyToString(money: number) {
  return transformMoney(money);
}
