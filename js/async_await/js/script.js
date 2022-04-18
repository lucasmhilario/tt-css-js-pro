const list = document.querySelector(".list-movie");
const btnSearch = document.querySelector("#btn-search");
const nameMovie = document.querySelector("#name-movie")

const urlBase = "https://www.omdbapi.com/?apikey=8a765a16&";
const urlBase2 = "https://62586acae4e0b731428c2384.mockapi.io/tasks";

const getMovies = async(movie) => {
  clearHtml();
  const response = await fetch(`${urlBase}s=${movie}`);
  const data = await response.json();

    data.Search.map((item) => {
      list.innerHTML += `
      <div class="movie">
        <img src="${item.Poster}" alt="poster ${item.Title}">
        <h1>${item.Title}</h1>
        <h2>${item.Year}</h2>
      </div>`
    });
  console.log(data);
};

const clearHtml = () => {
  list.innerHTML = "";
}

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  const movie = nameMovie.value
  getMovies(movie);
});

getMovies();