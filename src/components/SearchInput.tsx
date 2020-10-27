import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Search from "@material-ui/icons/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "baseline",
    "& > *": {
      marginRight: 32,
    },
    "& > button": {
      height: 28,
    },
  },
});

interface IProps {
  onChange?: (searchValule: string) => void;
}

export default function SearchInput(props: IProps) {
  const classes = useStyles();
  const [textSearch, changeSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSearch(event.target.value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      const btn = document.getElementById("searchIconButton");
      btn?.click();
    }
  };

  const handleClick = () => {
    const { onChange } = props;
    if (onChange) {
      onChange(textSearch);
    }
  };

  return (
    <div className={classes.root}>
      <FormControl>
        <InputLabel htmlFor='searchTradingAccount'>Type the name of movie</InputLabel>
        <Input
          id='searchTradingAccount'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={textSearch}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton onClick={handleClick} id='searchIconButton'>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
