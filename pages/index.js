import React, { useState } from 'react';
import CustomButton from '../components/Button';
import Confette from '../components/Confette';





import Datepicker from "../components/Datepicker";
import Select from '../components/Select';
import {FromDate,Batchno} from '../constants/batch'



export default function Home() {
  const [date, setdate] = useState(new Date());
  const [selectedoption, setselectedoption] = useState('');
  const [result,setResult]=useState(false);
  const [defaultShow,setdefaultShow]=useState(false)


  const options = [{
    "label": "1",
    "value": 1
  },
  {
    "label": "2",
    "value": 2
  }


  ]

  const datechangerhandler = (date) => {
    const dateHandling = new Date(date).toLocaleDateString();
    setdate(dateHandling);
    setdefaultShow(false)
  }

  const selectchangerhandler = (e) => {
    setselectedoption(e.target.value)
    setdefaultShow(false)
  }

  const FindmySatday = (startDate, endDate,selectedBatchno) => {
    let satdaycount = 0;
    while (startDate < endDate) {
      startDate.setDate(startDate.getDate() + 1);
      if (startDate.getDay() == 6) {
        ++satdaycount;
      }
    }
    const workingDay =satdaycount % Batchno === 0 ? true : false;
    const isSamebatch2=Batchno===selectedBatchno?workingDay:!workingDay
    return isSamebatch2
  };

  const onClickHandler = () => {
    const result=FindmySatday(new Date(FromDate),new Date(date),selectedoption);
    setResult(result);
    setdefaultShow(true);
  }


  return (
    
    <div className="w-full h-screen bg-green-300">
    <div className="h-1/6 w-full flex justify-center items-center border-b-2 border-blue-50">
        <h2 className="font-serif font-semibold text-blue-900 text-lg antialiased">
          Hi Welcome To Our Satday Finder
        </h2>
      </div>
      <div className="h-4/6 w-1/2 container mx-auto bg-fuchsia-100 m-8 shadow-2xl">
        
        <div className="w-full h-1/2 flex flex-row  justify-around items-center">

         
          <Datepicker
            value={date}
            Onchangehandler={datechangerhandler}
          />

                   

          <Select
            value={selectedoption}
            handleChange={selectchangerhandler}
            options={options}

          />

          <CustomButton 
          label="Check"
          onClick={onClickHandler}
          
          />
        </div>
        <div className="w-full h-1/2 flex flex-row justify-center items-start">
          {
            defaultShow?(result?<h3 className="text-red-600 text-lg">☹️ Working Day ☹️</h3>:<h3 className="text-green-400 text-lg">😎 Holiday 😎</h3>):
            
              <h3 className="text-orange-400 text-lg">🙂 Please Choose the Date and Batch no 🙂</h3>             
            
          }
        </div>
      </div>      
    </div>
  
  )
}
