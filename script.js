const birthDate = document.querySelector(".input");

// Age Boxes 
    const yearBox = document.querySelector(".year-content");
    const monthBox = document.querySelector(".month-content");
    const dayBox = document.querySelector(".day-content");
    const hourBox = document.querySelector(".hour-content");
    const minuteBox = document.querySelector(".minute-content");
    const secondBox = document.querySelector(".second-content");
/* End of age boxes */

const date = document.querySelector(".date");


let  dat = new Date();


birthDate.addEventListener("change",()=>{
    

    let str = birthDate.value + "";


    let birthYear = Number(str.slice(0,4));
    let birthMonth = Number(str.slice(5,7));
    let birthDay = Number(str.slice(8,10));


    date.innerHTML = birthYear + " / " + birthMonth + " / " + birthDay;

    let todaysYear = Number(dat.getFullYear());
    let todaysMonth = Number(dat.getMonth())+1;
    let todaysDay = Number(dat.getDate());


    if(todaysDay < birthDay){
        todaysDay += 30;
        todaysMonth -= 1;
    }

    if(todaysMonth < birthMonth){
        todaysMonth += 12;
        todaysYear -= 1;
    }
    

    let totalYears=0, totalMonths=0, totalDays=0;

    totalYears = todaysYear - birthYear;
    totalMonths = todaysMonth - birthMonth;
    totalDays = todaysDay - birthDay;

    yearBox.innerHTML = totalYears;
    monthBox.innerHTML = totalMonths;
    dayBox.innerHTML = totalDays;

    let totalHours = 0, totalMinutes = 0, totalSeconds = 0;

    totalHours = (365*24*totalYears) + (30*24*totalMonths) + (24*totalDays);
    totalMinutes = totalHours*60;
    totalSeconds = totalMinutes*60;

    hourBox.innerHTML = totalHours;
    minuteBox.innerHTML = totalMinutes;
    secondBox.innerHTML = totalSeconds;
})
