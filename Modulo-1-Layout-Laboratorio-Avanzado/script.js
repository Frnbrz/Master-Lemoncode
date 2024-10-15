const films = [
  {
    id: 1,
    title: 'Deadpool & Wolverine',
    duration: 175,
    genre: ['Action', 'Comedy', 'Science Fiction'],
    image: 'https://image.tmdb.org/t/p/original/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg'
  },
  {
    id: 2,
    title: 'The Avengers',
    duration: 143,
    genre: ['Action', 'Adventure', 'Science Fiction'],
    image: 'https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg'
  },
  {
    id: 3,
    title: 'The Lord of the Rings: The Return of the King',
    duration: 201,
    genre: ['Adventure', 'Fantasy', 'Action'],
    image: 'https://image.tmdb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
  },
  {
    id: 4,
    title: 'The Godfather',
    duration: 175,
    genre: ['Crime', 'Drama'],
    image: 'https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
  },
  {
    id: 5,
    title: 'The Dark Knight',
    duration: 152,
    genre: ['Drama', 'Action', 'Crime'],
    image: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    id: 6,
    title: 'The Shawshank Redemption',
    duration: 142,
    genre: ['Drama', 'Crime'],
    image: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
  },
  {
    id: 7,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    duration: 178,
    genre: ['Adventure', 'Fantasy', 'Action'],
    image: 'https://image.tmdb.org/t/p/original/56zTpe2xvaA4alU51sRWPoKPYZy.jpg'
  },
  {
    id: 8,
    title: 'The Lord of the Rings: The Two Towers',
    duration: 179,
    genre: ['Adventure', 'Fantasy', 'Action'],
    image: 'https://image.tmdb.org/t/p/original/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg'
  },
  {
    id: 9,
    title: 'The Matrix',
    duration: 136,
    genre: ['Action', 'Science Fiction'],
    image: 'https://image.tmdb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  },
  {
    id: 10,
    title: 'Inception',
    duration: 148,
    genre: ['Action', 'Adventure', 'Science Fiction'],
    image: 'https://image.tmdb.org/t/p/w1280/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg'
  }
]


document.querySelector('.cards_container').innerHTML = films.map(film => `
  <div class="cards">
   <span class="card__number">${film.id}</span>
    <div class="card__film">
      <img class="film"  src="${film.image}" alt="${film.title}">
      <div class="card__film__info">
        <h2>${film.title}</h2>
        <p>${film.duration} minutes</p>
        <p>${film.genre.join(', ')}</p>
      </div>
    </div>
  </div>
`).join('')