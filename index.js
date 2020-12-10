const logRequest = (req, res, next) => {
  console.log('Logging Request =>', req);
  next();
};

module.exports = {
  logRequest,
};
