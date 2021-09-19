
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Countdown from "react-countdown";




// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [datePicked, setDatePicked] = useState(false)
  const timeDiff=()=> {
    const targetDate = startDate;
    var now = new Date().getTime();

    var countDownDate = new Date(startDate).getTime();
    var distance = countDownDate - now;
    
    console.log(distance)
    return distance;


  }

  const handleDateChange=(date)=>{
    setStartDate(date)
    setDatePicked(true)

  }
  return (
  <div>
    <DatePicker selected={startDate} onChange={(date) => handleDateChange(date)} />
      {datePicked && <Countdown date={Date.now() + timeDiff()} />},

   {console.log("startDate", startDate)}
    </div>
  );
};

export default Example; 