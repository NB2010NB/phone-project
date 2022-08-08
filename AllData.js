const tBody = document.getElementById("tbody");
const url = "https://my-json-server.typicode.com/Jeck99/fake-server/users"
const spinner = document.getElementById("spinner");
async function getUser() {
    let usersData = await fetch(url);
    return usersData.json();
}
function upData() {
    spinner.innerHTML = `<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>`
    getUser().then((usersData) => {
        usersData.forEach(item => {

            tBody.innerHTML += `
            <tr >
            <td>${item.age}</td>
            <td>${item.email}</td>
            <td>${item.index}</td>
            <td>${item.name.last}</td>
            <td>${item.name.first}</td>
            <td>${item.phone}</td>
            <td>${item.picture}</td>
            <td>${item._id}</td>

            </tr>
            `

            console.log(usersData);
        })
    }).finally(()=>{spinner.style.display="none"});
}
upData()


