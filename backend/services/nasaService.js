const axios = require("axios");

const base = process.env.NASA_API_BASE;
const key = process.env.NASA_API_KEY;

const fetchFromNasaApi = async (endpoint, params = {}) => {
    try{
        const response = await axios.get(`${base}${endpoint}`,{
            params: { api_key: key, ...params },
        });
        return response.data;
    } catch(err){
        throw err;
    }
};

module.exports = fetchFromNasaApi;