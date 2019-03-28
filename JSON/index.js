// const a = require('./input');

// const find = (text) => {
//     let value = [];
//     a.id.forEach(element => {
//         if (element[0].name == text) {
//             value.push(element[0].id);
//         }
//     });
//     return value;
// }

// console.log(find("Amjad"));

const a = require('./input');

const find = (text) => {
    let value = [];
    a.id.forEach(element => {
        if (element[0].name == text) {
            value.push({ "id": element[0].id, "name": element[0].name });
        }
    });
    return value;
}

console.log(find("Amjad"));
