module.exports = function getDate(
  locale = 'en-US',
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
) {
  return new Date().toLocaleDateString(locale, options);
};