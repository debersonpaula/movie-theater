import React, { useEffect } from "react";
import MovieRow from "./MovieRow";
import Paper from "@material-ui/core/Paper";
import SearchInput from "../components/SearchInput";
import StarsRating from "../components/StarsRating";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { DiscoverMovieModel } from "../services/models/DiscoverMovieModel";
import { makeStyles } from "@material-ui/core/styles";
import { useModelContext } from "reactoom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  filterPanel: {
    display: "flex",
  },
});

export default function MovieTable() {
  const classes = useStyles();
  const discoverMovieModel = useModelContext(DiscoverMovieModel);

  const handleChange = (query: string) => {
    discoverMovieModel.getDiscoverMovie(query);
  };

  const handleRatingChange = (rating: number | null) => {
    if (rating) {
      discoverMovieModel.filterRating(rating);
    } else {
      discoverMovieModel.filterRating(0);
    }
  };

  useEffect(() => {
    discoverMovieModel.getDiscoverMovie();
  }, []);

  return (
    <div>
      <div className={classes.filterPanel}>
        <SearchInput onChange={handleChange} />
        <StarsRating onChange={handleRatingChange} />
      </div>
      {discoverMovieModel.isLoading && <div>Loading Movies...</div>}
      {discoverMovieModel.isFailed && <div>Error loading Movies</div>}
      {discoverMovieModel.isCompleted && (
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Title</TableCell>
                <TableCell>Popularity</TableCell>
                <TableCell>Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {discoverMovieModel.list?.map((row) => (
                <MovieRow data={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
