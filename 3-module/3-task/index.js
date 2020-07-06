/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split("-").map((w,index) => {
    if (index == 0) {
      return w;
    } else {
      return w[0].toUpperCase() + w.slice(1);
    }
  }).join("");
}