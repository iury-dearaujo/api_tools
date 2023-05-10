const express = require('express');
const router = express.Router();

router.get('/xlsxToJson', (req, res) => {
    const dynamicDate = {
        "status": req.ip
    };
    res.status(200).send(dynamicDate);
});

module.exports = router;