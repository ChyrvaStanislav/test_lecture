/*
Дан массив состоящий из объектов сотрудников. Напишите функцию которая будет принимать в себя Имя сотрудника (вседа строка)
или его ID (всегда число) и удалять объект указанного сотрудника из массива.
Второй опциональный аргумент - объект нового сотрудника. Если второй аргумент передан то функция
должна вставить в массив новый объект вместо старого;
Функция должна возвращать объект удаленного сотрудника;
Если в массиве нет такого сотрудника функция должна вывести alert "Сотрудник не найден" и вернуть null;
Используйте метод splice();
 */

const employees = [
    {
        name: 'Brandy Hambleton',
        age: 31,
        position: 'designer',
        id: 132,
    },
    {
        name: 'Killa Shikoba',
        age: 25,
        position: 'QA',
        id: 12,
    },
    {
        name: 'Colten Walsh',
        age: 46,
        position: 'lead developer',
        id: 32,
    },
    {
        name: 'Stace Rounds',
        age: 16,
        position: 'intern',
        id: 11,
    },
    {
        name: 'Joel James',
        age: 21,
        position: 'key developer',
        id: 54,
    },
    {
        name: 'Brannon Duke',
        age: 22,
        position: 'key developer',
        id: 56,
    },
];


















//
// const updateEmployees = (nameOrId, newEmployer = null) => {
//     let index = null;
//
//     if (typeof nameOrId === 'string') {
//         for (let i = 0; i < employees.length; i++) {
//             if (employees[i].name === nameOrId) {
//                 index = i;
//             }
//         }
//     } else if (typeof nameOrId === 'number') {
//         for (let i = 0; i < employees.length; i++) {
//             if (employees[i].id === nameOrId) {
//                 index = i;
//             }
//         }
//     }
//
//     if (!index) {
//         alert('Сотрудник не найден');
//         return null;
//     }
//
//     return newEmployer ? employees.splice(index, 1, newEmployer) : employees.splice(index, 1);
// };
//
// console.log(updateEmployees('Brannon Duke'));
// console.log(employees);
//
// console.log(updateEmployees(54));
// console.log(employees);
//
// console.log(updateEmployees(11, {
//     name: 'Stace Wolshe',
//     age: 17,
//     position: 'intern',
//     id: 11,
// }));
// console.log(employees);
