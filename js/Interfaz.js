export class Interfaz {
  showCarts(data) {
    const cardsContent = document.querySelector(".cards__content");
    let html = "";
    data.forEach((anime) => {
      html += `
        <div class="cards__item">
          <img class="cards__img" src="${anime.image_url}" />
          <div class="cards__info">
            <h2 class="cards__title">${anime.title}</h2>
            <span class="cards__episodes">${anime.episodes} Caps</span>
            <span class="cards__type"> ${anime.type} </span>
          </div>
        </div>
        `;
    });
    cardsContent.innerHTML = html;
  }

  loadGenreList(genres) {
    const optionsForm = document.querySelector(".options__form-content");
    let html = ``;
    genres.forEach((genre, id) => {
      html += `
        <label class="options__label">
          <input type="checkbox" id="${id + 1}" />${genre}
        </label>
      `;
    });

    optionsForm.innerHTML = html;
  }
}
