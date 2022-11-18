
async function getReservas(){
// Reservas
const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/bookings")
const data = await response.json()

console.log(data)

appendData(data)

}

getReservas()
  

function appendData(data) {
  
  let mainContainer = document.getElementById("tbody");

  for (let i = 0; i < data.length; i++) {
    let tbody = document.getElementById('tbody');
    let td = tbody.insertRow();
    
    let td_nome = td.insertCell();
    let td_email = td.insertCell();
    let td_evento = td.insertCell();
    
       
    td_nome.innerText = data[i].owner_name ;
    td_email.innerText = data[i].owner_email;
    // td_evento.innerText = data[i].event.name;

    let div = document.createElement("div");


    mainContainer.appendChild(div);
    
  }
}
