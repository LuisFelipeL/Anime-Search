export class API {
  constructor() {
    this.urlAPI = "https://api.jikan.moe/v3/";
  }
  // consultar animes en la api
  async consultAnimesAPI(consult) {
    const jikanApi = await fetch(`${this.urlAPI}search/anime?q=${consult}`);
    const data = await jikanApi.json();
    return data;
  }

  // consultar generos en la api
  async consultGenresAPI() {
    const genres = [];
    for (let i = 1; i < 44; i++) {
      const jikanApi = await fetch(`${this.urlAPI}genre/anime/${i}`);
      const data = await jikanApi.json();
      genres.push(data.mal_url.name.split(" ")[0]);
    }
    return genres;
  }

  // consultar animes según generos
  async consultAnimesGeneresAPI(listchecked) {
    let query = `${this.urlAPI}search/anime?order_by=score`;
    listchecked.forEach((item) => {
      query += `&genre=${item}`;
    });
    console.log(query);
    const jikanApi = await fetch(query);
    const data = await jikanApi.json();
    return data;
  }
}
