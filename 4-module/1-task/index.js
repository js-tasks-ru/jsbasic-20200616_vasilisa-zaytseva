/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let listElement = document.createElement('ul');
  for (let i = 0; i < friends.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = friends[i];
    listElement.appendChild(listItem);
  }
  return listElement;
}
