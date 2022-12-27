export function tableLoad() {
    let tableRef = document.getElementById('shop-table');

    tableRef.innerHTML = '<thead><tr><td><b>Имя</b></td><td><b>Ставка</b></td></tr></thead>';

    let users = JSON.parse(localStorage.getItem('users'));

    for (const key in users) {
        tableRef.insertAdjacentHTML('beforeend', `<tr><td>${key}</td><td>${users[key]}</td></tr>`)
    }
}