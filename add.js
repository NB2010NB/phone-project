
const form = document.getElementById("form");
const url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
class phone {
    constructor(color, createdAt, id, isAvailable, picture, price, ram) {
        this.color = color;
        this.createdAt = createdAt;
        this.id = id;
        this.isAvailable = isAvailable;
        this.picture = picture;
        this.price = price;
        this.ram = ram;
    }
}

form.addEventListener("click", function (event) {
    event.preventDefault()
    const colorUser = document.getElementById("color").value;
    const createdAtUser = document.getElementById("createdAt").value;
    const idUser = document.getElementById("id").value;
    const isAvailableUser = document.getElementById("isAvailable").value;
    const pictureUser = document.getElementById("picture").value;
    const priceUser = document.getElementById("price").value;
    const ramUser = document.getElementById("ram").value;
    let objectPhone = new phone(colorUser, createdAtUser, idUser, isAvailableUser, pictureUser, priceUser, ramUser);
    sendDetails(url, objectPhone)

});
async function sendDetails(url, objectPhone) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-length': '355',
            'content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            objectPhone
        }),
    };
    fetch(url, requestOptions)
    let details = await fetch(url);
    return details
}
function alert(){
    alert("hello")
}

