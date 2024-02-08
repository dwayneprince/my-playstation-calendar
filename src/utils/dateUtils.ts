export const getMonthData = (year: number, month: number) => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const totalDays = lastDayOfMonth.getDate();
  
    const monthData = [];
    let currentDay = 1;
  
    for (let i = 0; i < 5; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth.getDay()) || currentDay > totalDays) {
          week.push(null); 
        } else {
          week.push({
            date: currentDay,
       
          });
          currentDay++;
        }
      }
      monthData.push(week);
    }
  
    return monthData;
  };
  