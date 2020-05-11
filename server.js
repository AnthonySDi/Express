const express = require("express");
const PATH = require("path");
const LOGGER = require("./Middleware/logger"); // custom middleware
const MEMBERS = require("./Models/Members");
const APP = express();

// initializes the middleware
// didn't want to continue to log so commented out
// APP.use(LOGGER);

/**
 * This would require having a route for every page.
 */
/*
APP.get("/", (req, res) => {
  res.sendFile(PATH.join(__dirname, "public", "index.html"));
});
*/

// members API routes
APP.use("/api/members", require("./routes/api/members.js"));

// Set static Folder
/**
 * @purpose if using static files you can create dynamic routing list this
 */
APP.use(express.static(PATH.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
APP.listen(PORT, () => console.log(`Server started on port ${PORT}`));
