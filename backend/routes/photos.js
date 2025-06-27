const express = require("express");
const router = express.Router();
const fetchFromNasaApi = require("../services/nasaService");
const handleApiError = require("../utils/handleApiError");

router.get("/:rover", async (req, res) => {
  try {
    const { rover } = req.params;
    const { earth_date, camera, page } = req.query;
    console.log(req.query);

    if (!earth_date) {
      return res.status(400).json({ error: "Date is required." });
    }

    const params = {};
    if (earth_date) params.earth_date = earth_date;
    if (camera) params.camera = camera;
    if (page) params.page = page;

    const data = await fetchFromNasaApi(
      `/mars-photos/api/v1/rovers/${rover}/photos`,
      params
    );
    res.status(200).json(data);
  } catch (err) {
    handleApiError(res, err);
  }
});

module.exports = router;
