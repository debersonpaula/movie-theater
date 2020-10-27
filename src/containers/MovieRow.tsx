import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Rating from "@material-ui/lab/Rating";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import convertToFiveStar from "../helpers/convertToFiveStar";
import convertToFixed from "../helpers/convertToFixed";
import { IMovie } from "../services/interfaces/IMovieList";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import { IMAGE_URL } from "../config";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  image: {
    float: "left",
    paddingRight: 16,
  },
});

interface IProps {
  data: IMovie;
}

export default function MovieRow(props: IProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { data } = props;

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {data.title}
        </TableCell>
        <TableCell align='right'>
          {convertToFixed(data.popularity, 0)}
        </TableCell>
        <TableCell align='right'>
          <Rating
            name={"rating-" + data.id}
            value={convertToFiveStar(data.vote_average)}
            readOnly
          />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              {data.poster_path && (
                <img
                  src={`${IMAGE_URL}/${data.poster_path}`}
                  className={classes.image}
                />
              )}
              <p>
                <b>Overview:</b> {data.overview}
              </p>
              <p>
                <b>Release date:</b> {data.release_date}
              </p>
              <p>
                <b>Vote count:</b> {data.vote_count}
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
