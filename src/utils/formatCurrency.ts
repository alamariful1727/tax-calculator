const formatCurrency = (amount: number): string =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

export default formatCurrency;
