const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes/profitRoutes');

const Product = require('./models/Product');
const Profit = require('./models/Profit');

Product.hasMany(Profit);
Profit.belongsTo(Product);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/', routes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});
