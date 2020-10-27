import React from "react";
import MovieTable from "../containers/MovieTable";
import Typography from "@material-ui/core/Typography";

export function HomePage() {
  return (
    <>
      <Typography variant='h2'>Movie Theater Inc.</Typography>
      <MovieTable />
    </>
  );
}
