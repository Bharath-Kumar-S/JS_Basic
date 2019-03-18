let list = [{ name: 'Bharath', id: 60108696, interset: `JS coding` }, { name: 'Ramya', id: 900304, interset: `Python coding` }]

function display() {
    // const display = () => {
    let str = `
<table>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Interest</th>
  </tr>
</thead>
<tbody>
`;
    list.forEach((e) => {
        str = str.concat(`<tr><td>${e.id}</td><td>${e.name}</td><td>${e.interset}</td></tr>`)
    })
    let str1 = `  </tbody>
</table>
`
    document.getElementById("display").innerHTML = `${str}${str1}`;
}

const insert = () => {
    let usrid = document.getElementById("userid").value;
    document.getElementById("userid").value = ``;
    let usrnm = document.getElementById("username").value;
    document.getElementById("username").value = ``;
    let usrin = document.getElementById("userint").value;
    document.getElementById("userint").value = ``;
    // list.push({ name: `${usrnm}`, id: `${usrid}`, interset: `${usrin}` });
    list.unshift({ name: `${usrnm}`, id: `${usrid}`, interset: `${usrin}` });
    display();
}

function search() {

    let id = document.getElementById("search").value;

    list.forEach((e, i) => {

        console.log(`looping ${e.id} iteration count is ${i}`)

        if (e.id == id) {
            console.log("Object exist")
            alert(`Object is present`)
            list.splice(i, 1);
            display();
        }

    })


}