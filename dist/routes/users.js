"use strict";
// var express = require('express');
// var router = express.Router();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/* GET users listing. */
const router = express_1.Router();
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports.default = router;
