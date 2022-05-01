import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import './Searchbar.css'
import { makeStyles } from '@material-ui/core';

export default function Searchbar(props) {
    const useStyles = makeStyles({
        fontFamily: "Heebo, sans-serif"
    })

    const classes = useStyles();
    return (
        <div className="searchbar">
            <div className="bar">
                <Autocomplete
                    variant="outlined"
                    classes={classes}
                    disablePortal
                    id="choose-cuisine-type"
                    options={props.cuisineTypes}
                    value={props.chosenCuisine}
                    onInputChange={(event, newValue) => {
                        props.setChosenCuisine(newValue)
                    }}
                    sx={{ 
                        width: 300,
                        fontFamily: "Heebo, sans-serif",
                        // border: '3px solid #005377', 
                        borderRadius: 1,
                        "& .MuiInputLabel-root": {color: '#06A77D'},
                        "& .MuiAutocomplete-hasPopupIcon.css-1p8ghtp-MuiAutocomplete-root .MuiOutlinedInput-root": {width: "100vw"},
                        "& .MuiOutlinedInput-root":{"& > fieldset": {border: '2px solid #005377'}}
                     }}
                    renderInput={(params) => <TextField {...params} label="Cuisine Type" />}
                />
            </div>
        </div> 
    )
}