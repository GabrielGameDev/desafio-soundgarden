let tBody = document.querySelector('tbody')


async function getEventos(){
    const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events")
    const data = await response.json()

    let eventos = ""

    data.forEach((evento) => {

        console.log(evento._id)
        eventos += `<tr>
        <th scope="row">1</th>
        <td>${evento.scheduled}</td>
        <td>${evento.name}</td>
        <td>${evento.attractions}</td>
        <td>
            <a href="reservas.html" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html" class="btn btn-danger" onclick="saveId('${evento._id}')">excluir</a>
        </td>
    </tr>`;
    
        
      });

      tBody.innerHTML = eventos
}

getEventos()

function saveId(id){
    
    localStorage.setItem('id', id)
}