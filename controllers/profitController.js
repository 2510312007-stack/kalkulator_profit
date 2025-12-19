const Product = require('../models/Product');
const Profit = require('../models/Profit');
const ProfitService = require('../services/ProfitService');

exports.home = async (req, res) => {
  res.render('index');
};

exports.form = async (req, res) => {
  res.render('form');
};

exports.calculate = async (req, res) => {
  const { name, cost, price, quantity } = req.body;

  const product = await Product.create({
    name,
    cost,
    price
  });

  const result = ProfitService.calculate(
    Number(quantity),
    Number(price),
    Number(cost)
  );

  await Profit.create({
    ...result,
    productId: product.id
  });

  res.render('result', result);
};
