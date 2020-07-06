/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};
  let array = getNumbersArray(str);
  let max = Math.max(...array);
  let min = Math.min(...array);
  result.min = min;
  result.max = max;
  return result;
};


function getNumbersArray(str) {
  let result = [];
  str.split(/,| /).forEach(item => {
    if (isFinite(item) && item != "") {
      result.push(+item)
    }
  });
  return result;
}

