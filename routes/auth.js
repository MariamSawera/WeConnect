const express = require("express");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const {name, email, password} = req.body;

    const hashed = await bcrypt.hash(password, 10);
    
    const batchId = 1;

    //

    res.json ({
        message: "user created(fake for now)"
    });
});

module.exports = router;
