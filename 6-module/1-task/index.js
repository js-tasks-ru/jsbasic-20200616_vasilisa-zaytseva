/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {

  elem = document.createElement('table');
  constructor(rows) {
   
    let header = document.createElement('thead');
    this.elem.appendChild(header);  
    let headerRow = header.insertRow();
    let name = document.createElement('th');
    headerRow.appendChild(name).innerHTML = 'Имя';
    let age = document.createElement('th');
    headerRow.appendChild(age).innerHTML = 'Возраст';
    let salary = document.createElement('th');
    headerRow.appendChild(salary).innerHTML = 'Зарплата';
    let city = document.createElement('th');
    headerRow.appendChild(city).innerHTML = 'Город';
   
    let tbody = document.createElement('tbody');
    this.elem.appendChild(tbody);

    for (let row of rows) {
      let tr = tbody.insertRow();
      tr.insertCell(0).innerHTML = row.name;
      tr.insertCell(1).innerHTML = row.age;
      tr.insertCell(2).innerHTML = row.salary;
      tr.insertCell(3).innerHTML = row.city;
      
      let button = document.createElement('button');
      button.innerHTML = 'X';
      tr.insertCell(-1).appendChild(button);

      button.addEventListener('click', () => {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
      })
    } 
  }
}
