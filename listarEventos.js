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
            <h2>${evento.name} <br> ${evento.scheduled.slice(0,10).split("-").reverse().join("/")}</h2>
            <h4>${evento.attractions}</h4>
            <p>
              ${evento.description}
            </p>
            <a href="#" id="${evento._id}" class="btn btn-primary reservaIngresso">reservar ingresso</a>
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