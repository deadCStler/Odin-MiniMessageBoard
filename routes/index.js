var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hey, loosen up. It's only life or death!",
    user: "Harbour",
    added: new Date(),
  },
  {
    text: "Don't worry guys, they say I'm a prodigy. Not my words! Not my words, baby!",
    user: "Phoniex",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res, next) => {
  const { authorName, message } = req.body;
  messages.push({ text: message, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = router;
