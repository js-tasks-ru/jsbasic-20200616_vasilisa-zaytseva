/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return capitalized = str
                      .split('-')
                      .map((w,i) => { 
                        if (i == 0) { 
                      	  return w;
                        } else {
                      	return w.charAt(0).toUpperCase() + w.slice(1);
                        }
                      })
                      .join('');
}