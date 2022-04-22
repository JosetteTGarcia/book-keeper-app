import React from 'react'
//Switch Button for "Show All Books"
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

//Filter Drop Down menu
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Filters({ sortBy, onChangeSortBy, onChange, showAllBooks}){
  
  const handleFilterChange = (event) => {
    event.preventDefault()
    onChangeSortBy(event.target.value);
  };

  function handleSwitchClick(event){
    onChange(event.target.checked)
  }
  
  return (
    <div>
    <FormGroup>
              <FormControlLabel 
              control={<Switch />} 
              checked={showAllBooks}
              label="Show All Books" onClick={handleSwitchClick}/>
            </FormGroup>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sory By</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sortBy}
                label="sortBy"
                onChange={handleFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="rating" >Rating: Highest - Lowest</MenuItem>
                <MenuItem value="newest" >Newest - Oldest</MenuItem>
                <MenuItem value="oldest">Oldest - Newest</MenuItem>
              </Select>
          </FormControl>
      </div>
  )

}

export default Filters;