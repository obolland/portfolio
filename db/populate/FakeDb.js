
const { portfolios } = require('./data');
const Portfolio = require('../models/portfolionode db/populate/index.js');

class FakeDB {

  async clean() {
    await Portfolio.deleteMany({});
  }

  async addData() {
    await Portfolio.create(portfolios);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();