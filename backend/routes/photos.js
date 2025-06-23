const express = require("express");
const router = express.Router();
const fetchFromNasaApi = require("../services/nasaService");
const handleApiError = require("../utils/handleApiError");

router.get("/:rover", async (req, res) => {
    try {
        const {rover} = req.params;
        const {sol, earth_date, camera} = req.query;

        const params = {};
        if (sol) params.sol = sol;
        if (earth_date) params.earth_date = earth_date;
        if (camera) params.camera = camera;

        const data = await fetchFromNasaApi(`/mars-photos/api/v1/rovers/${rover}/photos`, params);
        res.status(200).json(data);
    } catch (err) {
        handleApiError(res, err);
    }
});

module.exports = router;