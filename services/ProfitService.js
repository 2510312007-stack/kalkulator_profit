class ProfitService {
  static calculate(quantity, price, cost) {
    const revenue = quantity * price;
    const totalCost = quantity * cost;
    const profit = revenue - totalCost;
    const margin = (profit / revenue) * 100;

    return {
      revenue,
      totalCost,
      profit,
      margin
    };
  }
}

module.exports = ProfitService;
