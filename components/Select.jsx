import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOptions(props) {
    const {options,batchno,handleChange,errormsg}=props;
  

  return (
   
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Batch No</InputLabel>
        <Select          
          value={batchno}
          label="Batch No"
          onChange={handleChange}
        >
        {
              options.map((i,ind)=>{
                  return(
                    <MenuItem value={i.value} key={ind}>{i.label}</MenuItem>
                  )
                  
              })
          }
          
          
        </Select>
        {errormsg && <FormHelperText>With label + helper text</FormHelperText>}
      </FormControl>
    
  );
}
