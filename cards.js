const url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
let urlPhoto = "/photo/cards/"
const spinner =document.getElementById("spinner")
async function getPhones() {
  const response = await fetch(url);
  return response.json();
}

let photoCards = [ `${urlPhoto}samsung0.jpg`
  , `${urlPhoto}samsung1.png`
  , `${urlPhoto}apple2.jpeg`
  , `${urlPhoto}mi3.jpg`
  , `${urlPhoto}sony4.jpg`
  , `${urlPhoto}google5.webp`
  , `${urlPhoto}apple6.jpg`
  , `${urlPhoto}apple7.jpg`
  , `${urlPhoto}sony8.jpg`
  , `${urlPhoto}apple9.jpeg`
  , `${urlPhoto}apple10.jpg`
  , `${urlPhoto}google11.jpg`
  , `${urlPhoto}sony12.gif`
  , `${urlPhoto}mi13.jpg`
  , `${urlPhoto}apple14.png`]
  let phones;
  function printCards(){

    spinner.innerHTML= `<div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
    </div>`

    getPhones().then((res) => {
      phones = res;
      console.log(phones);
      let counter = 0
      phones.forEach(phone => {
        const div = document.createElement("div");
        const phonesDiv = document.getElementById("phones");
        console.log(counter);
        
        
        phonesDiv.innerHTML += `<div class="card" style="width: 21rem;">
        <img width="200px" height="120px" class="card-img-top" src="${photoCards[counter]}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${phone.brand}</h5>
        <p class="card-text">color: ${phone.color}
        <br>createdAt: ${phone.createdAt}
        <br>id: ${phone.id}
        <br>isAvailable: ${phone.isAvailable}
        <br>picture: ${phone.picture}
        <br>price: ${phone.price}
        <br>ram: ${phone.ram}</p>
        <a href="#" class="btn btn-primary">Delete</a>
        </div>
        </div>`
        
        phonesDiv.appendChild(div);
        counter+=1
      });
}).finally(()=>{spinner.style.display="none"});
}
printCards()

