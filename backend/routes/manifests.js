const express = require("express");
const router = express.Router();
const fetchFromNasaApi = require("../services/nasaService");
const handleApiError = require("../utils/handleApiError");

router.get("/:rover", async (req, res) => {
  try {
    const data = await fetchFromNasaApi(
      `/mars-photos/api/v1/manifests/${req.params.rover}`
    );
    res.status(200).json(data);
  } catch (err) {
    handleApiError(res, err);
  }
});

module.exports = router;
