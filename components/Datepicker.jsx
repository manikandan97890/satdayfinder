import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function Datepicker(props) {

  const filteredDate=(date)=>{
      const day=new Date(date).getDay()
      const isValid=day===6?false:true
      return isValid
  }
 

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['day', 'month']}
          label="Select Date"
          value={props.value}
          onChange={props.Onchangehandler}
          renderInput={(params) => <TextField {...params} helperText={null} />}
          disablePast
          shouldDisableDate={ filteredDate }
        />
       
    </LocalizationProvider>
  );
}
