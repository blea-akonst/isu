import {tableLoad} from "./table.js";

const form = document.querySelector('#signup');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('listener');

    const playerName = form.elements['playername'].value;
    const bet = form.elements['bet'].value;

    let user = {};

    if (playerName && bet && playerName.length && bet.length){
        user = {
            name: playerName,
            bet: bet
        }

        let localStorageUsers = localStorage.getItem('users');

        if (localStorageUsers) {
            localStorageUsers = JSON.parse(localStorageUsers);
        } else {
            localStorageUsers = {};
        }

        localStorageUsers[user.name] = user.bet;

        localStorage.setItem('users', JSON.stringify(localStorageUsers));
    } else {
        // first argument - modal header
        // second - modal text
        // third - modal type
        swal(
            "Ошибка",
            "Ты дегенерат? Одно из полей оказалось пустым (а то и вообще оба)! Заряжай хоть в киоске!",
            "error"
        );
    }

    tableLoad();
});
