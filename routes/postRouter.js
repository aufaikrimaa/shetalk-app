// const path = require("path");
// const moduleAlias = require("module-alias");
// // moduleAlias.addAlias("@models", path.join(__dirname, "../../src/models"));

const express = require("express");
const router = express.Router();

const verifyApiKeyMiddleware = require("../services/verifyTokenService");

// [api/posts?page=1{for paginate}]
router.get("/", function (req, res) {});
module.exports = router;
