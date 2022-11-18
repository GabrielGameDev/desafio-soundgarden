
// Modal

function acao() {
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';
}

function fechar() {
    let modal = document.querySelector('.modal')

    modal.style.display = 'none';

}

// POST

function fazReservas(url, body) {
    console.log("Body=", body);
    let request = new XMLHttpRequest()
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function() {
        console.log(this.responseText);
    }

    return request.responseText


}

function cadastroUsuario(){
    event.preventDefault()
    let url = "https://xp41-soundgarden-api.herokuapp.com/bookings";
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    

    body = {
        "owner_name": nome,
        "owner_email": email,
        "number_tickets": 1,
        "event_id": "637623aa85122eed6298158e"
    }

    fazReservas(url, body);
}

// Reservas

// fetch("https://xp41-soundgarden-api.herokuapp.com/bookings")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });

// function appendData(data) {
//   let mainContainer = document.getElementById("tbody");
//   for (let i = 0; i < data.length; i++) {
//     let tbody = document.getElementById('tbody');
//     let td = tbody.insertRow();
    
//     let td_nome = td.insertCell();
//     let td_email = td.insertCell();
//     let td_evento = td.insertCell();
    
       
//     td_nome.innerText = data[i].owner_name ;
//     td_email.innerText = data[i].owner_email;
//     td_evento.innerText = data[i].event.name;

//     let div = document.createElement("div");


//     mainContainer.appendChild(div);
//   }
// }
