async function getEventos(){
    let tBody = document.getElementById("eventos")
    console.log(tBody)

    const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events")
    const data = await response.json()

    let eventos = ""
    
    for (let index = 0; index < 3; index++) {
        console.log(data[index]._id)
        eventos += `<article class="evento card p-5 m-3">
        <h2>${data[index].name} - ${data[index].scheduled}</h2>
        <h4>${data[index].attractions}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique,
            dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus
            nobis in inventore tenetur asperiores.</p>
        <a class="btn btn-primary" onclick="acao('${data[index]._id}')">reservar ingresso</a>
`      
if(index == 0){
    eventos += `<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Reserve seu ingresso</h1>
                <button type="button" onclick="fechar()" class="btn-close" data-bs-dismiss="modal"
                    aria-label="fechar"></button>
            </div>
            <div class="modal-body">
                <form id="form">
    
                    <div class="nome-reserva">
                        <label for="exampleInputNome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" value="" autocomplete="off"
                            aria-describedby="nome">
    
                    </div>
    
                    <div class="email-reserva">
                        <label for="exampleInputEmail" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="email" value="" autocomplete="off"
                            aria-describedby="email">
    
                    </div>
    
                    <div class="modal-footer">
                <button type="button" onclick="cadastroUsuario()" class="btn btn-primary">Reservar</button>
                <button type="reset" class="btn btn-primary">Limpar campos</button>
    
            </div>
    
            </div>
            
            </form>
        </div>
    </div>
    
    </div>`
}
eventos += "</article>"

       
    }    

      tBody.innerHTML = eventos
}
getEventos()

// Modal

function acao(id) {
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';
    localStorage.setItem('id', id)
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

     fechar()
     return request.responseText

     
}

function cadastroUsuario(){
    console.log("cliquei pra cadstrar")
    event.preventDefault()
    let url = "https://xp41-soundgarden-api.herokuapp.com/bookings";
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    

    body = {
        "owner_name": nome,
        "owner_email": email,
        "number_tickets": 1,
        "event_id": localStorage.getItem('id')
    }

    console.log(body)
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
