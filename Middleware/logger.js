const MOMENT = require("moment");

/**
 * @purpose to create customer middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next moves on to the next middleware item.
 */
const LOGGER = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${MOMENT().format()}`
  );
  next();
};

module.exports = LOGGER;
