//회원가입(SignUp2)에서 년도를 선택할 때 드롭다운

import React, { useState } from 'react';
import './DropdownComponent.css'; // 별도의 CSS 파일을 임포트합니다.

const DropdownComponent = ({onDateSelected}) => {
    const years = [];
    const months = Array.from({ length: 12 }, (_, i) => i + 1); // 1월부터 12월까지의 배열 생성
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1일부터 31일까지의 배열 생성
    const startYear = 1950;
    const currentYear = new Date().getFullYear();
  
    for (let i = startYear; i <= currentYear; i++) {
      years.push(i);
    }
  
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
  
    const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
      onDateSelected(e.target.value, selectedMonth,selectedDay);
    };
  
    const handleMonthChange = (e) => {
      setSelectedMonth(e.target.value);
      onDateSelected(selectedYear, e.target.value, selectedDay);
    };
  
    const handleDayChange = (e) => {
      setSelectedDay(e.target.value);
      onDateSelected(selectedYear, selectedMonth, e.target.value);
    };
  
    return (
      <div className="dropdown-container">
        <label htmlFor="yearSelect">생년월일 </label>
        <select id="yearSelect" onChange={handleYearChange} value={selectedYear} className="custom-dropdown">
          <option value="">년도</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
  
        <label htmlFor="monthSelect"> </label>
        <select id="monthSelect" onChange={handleMonthChange} value={selectedMonth} className="custom-dropdown">
          <option value="">월</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
  
        <label htmlFor="daySelect"> </label>
        <select id="daySelect" onChange={handleDayChange} value={selectedDay} className="custom-dropdown">
          <option value="">일</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        
      </div>
    );
  };

export default DropdownComponent;