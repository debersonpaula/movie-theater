import axios from "axios";
import { IMovieList } from "../interfaces/IMovieList";
import { API_URL, API_KEY } from "../../config";

export class TheMovieDbRepository {
  public static URL_GET_DISCOVER_MOVIE = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  public static URL_GET_SEARCH_MOVIE = (query: string) =>
    `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  public static getDiscoverMovie(query?: string) {
    let url = this.URL_GET_DISCOVER_MOVIE;
    if (query) {
      url = this.URL_GET_SEARCH_MOVIE(query);
    }
    return axios.get<IMovieList>(url);
  }
}
