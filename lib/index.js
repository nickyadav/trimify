const trimify = (str) => {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

trimify.lead = (str) => {
  return str.replace(/^\s\s*/, '');
};

trimify.trail = (str) => {
  return str.replace(/\s\s*$/, '');
};

module.exports = trimify;