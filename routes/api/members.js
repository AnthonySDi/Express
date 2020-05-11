const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();
const MEMBERS = require("../../Models/Members");

/**
 * @purpose gets all members
 */
ROUTER.get("/", (req, res) => {
  // .json will return json so I can hit this route on postman
  //    and see the object MEMBERS
  res.json(MEMBERS);
});

/**
 * @purpose gets a single member
 * @success Returns JSON with member information
 * @failure sets status to 400 w/ msg: no member with id found
 */
ROUTER.get("/:id", (req, res) => {
  let found = MEMBERS.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(MEMBERS.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

module.exports = ROUTER;
