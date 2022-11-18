var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  async function listarEventos() {
    try {
      const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", requestOptions);
      const data = await response.json();
      console.log(data);
      const eventos = data
        .map((evento) =>  
          `<article class="evento card p-5 m-3">
            <h2 id="titulo">${evento.name} </h2> <h2 id="data"> ${evento.scheduled.slice(0,10).split("-").reverse().join("/")}</h2>
            <h4>${evento.attractions}</h4>
            <p>
              ${evento.description}
            </p>
            <a href="#" id="${evento._id}" class="btn btn-primary reservaIngresso" onclick="acao('${evento._id}')">reservar ingresso</a>
            <div class="modal-dialog">
            <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Reserve seu ingresso</h1>
                        <button type="button" onclick="fechar()" class="btn-close" data-bs-dismiss="modal"
                            aria-label="fechar"></button>
                    </div>

                    <div class="modal-body">
                        <form id="form" type="reset" method="post">
        
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
        
        </div>
          </article>`
        );
        document.getElementById('eventos').innerHTML = eventos;
  
    } catch (error) {
      console.log('Fetch Error :-S', error);
    }
  }
  
  function reservarIngresso(e) {
    e.preventDefault();
    console.log("reservarIngresso");
  }
  
  window.addEventListener('load', event => {
    listarEventos();
  });
  
  window.onload = (event) => {
    setTimeout(() => {
      const eventos = document.getElementsByClassName('reservaIngresso');
      for(let i=0; i<eventos.length; i++){
        eventos.item(i).addEventListener("click", reservarIngresso, false);
      }
    }, 1000);
  };

  function acao(id) {
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';

    localStorage.setItem('id', id)
}

function fechar() {
  let modal = document.querySelector('.modal')

  modal.style.display = 'none';

}

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

