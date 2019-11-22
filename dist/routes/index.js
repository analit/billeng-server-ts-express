"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var express = require('express');
// var router = express.Router();
const express_1 = require("express");
const router = express_1.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
// module.exports = router;
exports.default = router;
