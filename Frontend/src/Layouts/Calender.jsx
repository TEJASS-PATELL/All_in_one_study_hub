import React, { useEffect, useState } from 'react';
import './Calender.css';

function Calender() {
    const [calendar, setCalendar] = useState({
        date: "00",
        day: "Monday",
        month: "January",
      });
    
      const [time, setTime] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
      });
    
      useEffect(() => {
        const weekdays = [
          "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
    
        const updateTime = () => {
          const now = new Date();
    
          const date = now.getDate().toString().padStart(2, '0');
          const day = weekdays[now.getDay()];
          const month = months[now.getMonth()];
          const year = now.getFullYear();
    
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');
    
          setTime({ hours, minutes, seconds });
          setCalendar({ date, day, month, year });
        };
    
        updateTime(); 
        const timerId = setInterval(updateTime, 1000); 
    
        return () => clearInterval(timerId); 
      }, []);

    return (
        <div className="box">
            <div className="calendar">
                <div className="calendar1">
                    <span id="date">{calendar.date}</span>
                    <span id="day">{calendar.day}</span>
                    <div className="clock">
                        <span id="hrs">{time.hours}</span>
                        <span>:</span>
                        <span id="min">{time.minutes}</span>
                    </div>
                    <div className="label-row">
                        <span>Hours</span>
                        <span>Minutes</span>
                    </div>
                </div>
                <div className="calendar2">
                    <span id="month">{calendar.month}</span>
                    <span id="year">{calendar.year}</span>
                </div>
            </div>
        </div>
    )
}

export default Calender