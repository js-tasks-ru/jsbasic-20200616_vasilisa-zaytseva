/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  return users.filter(user => user.age <= age).map(getInfo).join("\n");
};

function getInfo(user) {
	return `${user.name}, ${user.balance}`;
};
