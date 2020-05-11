const EXPRESS = require("express");
const PATH = require("path");
const EXPHBS = require("express-handlebars");
const LOGGERTHIS = require("./Middleware/logger"); // custom middleware
const MEMBERS = require("./Models/Members");
const APP = EXPRESS();

// initializes the middleware
// didn't want to continue to log so commented out
// APP.use(LOGGERTHIS);

// handlebars middleware
APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

// Body Parser Middleware
APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: false }));

APP.get("/", (req, res) =>
  res.render("index", {
    title: "Member app",
    members: MEMBERS,
  })
);

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
 * - reference for how to do this, it's not how you would normally
 *  - needs to stay below other routes
 */
APP.use(EXPRESS.static(PATH.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
APP.listen(PORT, () => console.log(`Server started on port ${PORT}`));
