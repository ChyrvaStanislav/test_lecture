/*
Дан массив состоящий из объектов сотрудников.
Выведете на экран список карточек для сотрудников в формате:

<li>
<p class="number">1</p>
<img class="avatar" src="https://avatar-url.com" alt="Jhon Jhonson avatar">
<p class="name">JHON JHONSON</p>
<p class="position">designer</p>
<p class="age">Age: 22</p>
<p class="id">id: 123</p>
</li>

Список должен быть отсартирован по возрастанию по параметру "id";
В списке должны быть только сотрудники которые не находяться в отпуске;
Используйте методы sort(), filter(), map();
 */

const employees = [
    {
        name: 'Brandy Hambleton',
        age: 31,
        position: 'designer',
        avatar: 'https://i.pravatar.cc/250?v=1',
        isOnVacation: false,
        id: 132,
    },
    {
        name: 'Killa Shikoba',
        age: 25,
        position: 'QA',
        avatar: 'https://i.pravatar.cc/250?v=2',
        isOnVacation: false,
        id: 12,
    },
    {
        name: 'Colten Walsh',
        age: 46,
        position: 'lead developer',
        avatar: 'https://i.pravatar.cc/250?v=3',
        isOnVacation: false,
        id: 32,
    },
    {
        name: 'Stace Rounds',
        age: 16,
        position: 'intern',
        avatar: 'https://i.pravatar.cc/250?v=4',
        isOnVacation: false,
        id: 11,
    },
    {
        name: 'Joel James',
        age: 21,
        position: 'key developer',
        avatar: 'https://i.pravatar.cc/250?v=5',
        isOnVacation: true,
        id: 54,
    },
    {
        name: 'Brannon Duke',
        age: 22,
        position: 'key developer',
        avatar: 'https://i.pravatar.cc/250?v=6',
        isOnVacation: false,
        id: 56,
    },
    {
        name: 'Arnav Crouch',
        age: 43,
        position: 'backend developer',
        avatar: 'https://i.pravatar.cc/250?v=7',
        isOnVacation: false,
        id: 516,
    },
    {
        name: 'Regan Bender',
        age: 24,
        position: 'junior developer',
        avatar: 'https://i.pravatar.cc/250?v=8',
        isOnVacation: true,
        id: 116,
    },
    {
        name: 'Esmay Johnston',
        age: 22,
        position: 'QA',
        avatar: 'https://i.pravatar.cc/250?v=9',
        isOnVacation: false,
        id: 74,
    },
];























// const sortedArray = employees.sort((a, b) => a.id - b.id);
//
// const filteredArray = sortedArray.filter(item => !item.isOnVacation);
//
// const htmlArray = filteredArray.map((employer, index) => {
//     return `
//         <li>
//         <p class="number">${index}</p>
//         <img class="avatar" src="${employer.avatar}" alt="${employer.name} avatar">
//         <p class="name">${employer.name}</p>
//         <p class="position">${employer.position}</p>
//         <p class="age">Age: ${employer.age}</p>
//         <p class="id">id: ${employer.id}</p>
//         </li>
//     `
// })
//
// /**
//  * @param htmlArray {[String]}
//  */
// const render = (htmlArray) => {
//     const container = document.querySelector('#container');
//     container.innerHTML = htmlArray.join(' ');
// }
//
// render(htmlArray);
