const modelJoyas = require("../models/modelJoyas");

const hateoas = (data) => {
  const results = data.map((item) => {
    return {
      name: item.nombre,
      href: `/joyas/joya/${item.id}`,
    };
  });

  const total = results.length;
  const stock = data.reduce((stock, item) => (stock += item.stock), 0);

  return {
    totalJoyas: total,
    stockTotal: stock,
    results,
  };
};

const getJoyasCon = async (req, res) => {
  try {
    const queryStrings = req.query;
    const joyas = await modelJoyas.getAll(queryStrings);

    const results = hateoas(joyas);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getJoyasFilterCon = async (req, res) => {
  try {
    const queryStrings = req.query;
    const joyas = await modelJoyas.filterAll(queryStrings);

    const results = hateoas(joyas);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = {
  getJoyasCon,
  getJoyasFilterCon,
};
