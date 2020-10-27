import convertToFiveStar from "../../helpers/convertToFiveStar";
import { BaseHttpModel } from "../common/BaseHttpModel";
import { IMovieList } from "../interfaces/IMovieList";
import { TheMovieDbRepository } from "../repository/TheMovieDbRepository";

export class DiscoverMovieModel extends BaseHttpModel<IMovieList> {
  protected rating = 0;

  public getDiscoverMovie = (query?: string) => {
    this.request(TheMovieDbRepository.getDiscoverMovie(query));
  };

  public filterRating = (rating: number) => {
    this.rating = rating;
  };

  public get list() {
    if (this.rating > 0) {
      return this.response?.data.results.filter(
        (item) => convertToFiveStar(item.vote_average) === this.rating
      );
    }

    return this.response?.data.results;
  }
}
