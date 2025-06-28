const handleApiError = (res, err) => {
  console.error(err?.response?.data || err.message);
  const status = err?.response?.status || 500;
  const message = err?.response?.data?.error?.message || "Something went wrong";
  res.status(status).json({ error: message });
};

module.exports = handleApiError;
