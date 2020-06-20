// Importaciones
import { API } from "./API.js";
import { Interfaz } from "./Interfaz.js";

// Instancias
const api = new API();
const ui = new Interfaz();

// Varibles
const inputSearch = document.getElementById("input-search");
const optionsBtn = document.querySelector(".options-btn");
const options = document.querySelector(".options");
const optionsSubmit = document.querySelector(".options__btn");

// Eventlisteners
document.addEventListener("DOMContentLoaded", () => {
  api.consultGenresAPI().then((genres) => {
    ui.loadGenreList(genres);
  });
});

optionsBtn.addEventListener("click", () => {
  options.classList.toggle("show");
});

optionsSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const listChecked = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const listId = [...listChecked].map((item) => item.id);
  api.consultAnimesGeneresAPI(listId).then((data) => {
    ui.showCarts(data.results);
    options.classList.remove("show");
  });
});

inputSearch.addEventListener("input", (e) => {
  if (e.target.value.length > 2) {
    const search = e.target.value;
    api.consultAnimesAPI(search).then((data) => {
      ui.showCarts(data.results);
    });
  }
});
