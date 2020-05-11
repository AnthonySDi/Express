const express = require("express");

const APP = express();

APP.get("/", (req, res) => {});

const PORT = process.env.PORT || 5000;
APP.listen(PORT, () => console.log(`Server started on port ${PORT}`));
