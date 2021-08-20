const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/authMiddlewares');

const authorizationRoutes = require('./authorization')

router.use("/auth", authorizationRoutes);

module.exports = router;