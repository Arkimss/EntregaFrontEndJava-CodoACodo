const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=c175bb9a4bc31f91af83b9366e63c068'
fetch(url).then(response => response.json())
    .then(data => mostrarData(data.results))
    .catch(error => console.log(error))



function insertarPelicula(pelicula) {
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.innerHTML = `<h2 class="fs-5 px-4 mx-1 text-light fw-bold" > ${pelicula.title}</h2>
<img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" /> `
    const container = document.querySelector('#container');
    container.appendChild(divCard);

}

function mostrarData(data) {
    console.log(data)
    data.forEach(pelicula => insertarPelicula(pelicula));

};