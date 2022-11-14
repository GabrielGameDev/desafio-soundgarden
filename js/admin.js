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
            <a href="editar-evento.html" class="btn btn-secondary" onclick="saveId('${evento._id}')">editar</a>
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

// const dados = {
    
//     "name": "Lollapalooza Brasil 2023",
//     "poster": "https://www.wherecuritiba.com.br/wp-content/uploads/2022/08/LOLLA-LANCAMENTO-FEED-01.jpg",
//     "attractions": [
//         "Drake, Billie Eilish, Blink 182, Rise Against, Jane's Adiction, várias outras bandas que ninguém se importar"
//     ],
//     "description": "Evento caro pra caramba com várias bandas desconhecidas e poucas famosas",
//    "scheduled": "2022-12-24",
//     "number_tickets": 4000

// }
// fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
// method: 'POST', // or 'PUT'
// headers: {
// 'Content-Type': 'application/json',
// },
// body: JSON.stringify(dados),
// })
// .then((response) => response.json())
// .then((data) => {
// console.log('Success:', data);
// })
// .catch((error) => {
// console.error('Error:', error);
// });