/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
	
	    let gender = rows[i].cells[2].innerHTML;
        let status = rows[i].cells[3].dataset.available;
        let age = +rows[i].cells[1].innerHTML;

        if (gender === 'm') {
            rows[i].className += ' male';
        } else if (gender === 'f') {
            rows[i].className += ' female';
        }

        if (status === 'true') {
            rows[i].className += ' available';
        } else if (status === 'false') {
            rows[i].className += ' unavailable';
        } else if (status == undefined) {
            rows[i].setAttribute('hidden', 'true');
        }

        if (age < 18) {
            rows[i].setAttribute('style', 'text-decoration: line-through');
        }
    }
};
