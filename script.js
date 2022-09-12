var currentDate = new Date()
var currentYear = currentDate.getFullYear(),
    currentMonth = currentDate.getMonth() + 1,
    currentDay = currentDate.getUTCDate();

var currentTotolDays = (((currentYear * 12) + currentMonth) * 30) + currentDay;
        

function calculate(){
    if(document.getElementById('date-value').value == ''){
        alert('Enter date of birth')
    }else{
        calc();
        setInterval(calc, 1000);
    }
}



function calc(){
    var inputValue = document.getElementById("date-value").value;

    var arr = inputValue.split('-'),
        inputYear = eval(arr[0]), 
        inputMonth = eval(arr[1]),
        inputDay = eval(arr[2]);

    var inputTotalDays = (((inputYear * 12) + inputMonth) * 30) + inputDay;

    var diffrence = currentTotolDays - inputTotalDays;

    var days = diffrence,
        months = (days / 30).toFixed(),
        years = parseInt((months / 12));

    
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    var hours = (days * 24) + hour,
        minutes = (hours * 60) + minute,
        seconds = (minutes * 60) + second;

        

    var span = document.querySelectorAll('span');

    if(years < 0){
        years = 0;
    }
    if(months < 0){
        months = 0;
    }
    if(days < 0){
        days = 0;
    }
    if(hours < 0){
        hours = 0;
    }
    if(minutes < 0){
        minutes = 0;
    }
    if(seconds < 0){
        seconds = 0;
    }

    span[0].textContent = years;
    span[1].textContent = months;
    span[2].textContent = days;
    span[3].textContent = hours;
    span[4].textContent = minutes;
    span[5].textContent = seconds;
}
    
