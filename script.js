var clock = document.querySelector(".current")
console.log(clock)

var noon = 12

var clockCurrent = setInterval(()=>{
    var currentTime = new Date()

    var hour = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    var meridian = "AM"

    if(hour >= noon){
        meridian = "PM"
    }
    if(hour === noon){
        hour = 12
    }
    if(hour > noon){
        hour = hour - 12
    }
    if(hour < 10 ){
        hour =  "0"+hour
        
    }
    if(minutes < 10){
        minutes = "0"+minutes
    }
    if(seconds < 10){
        seconds = "0"+seconds
    }

    var clockTime = hour + " : " + minutes + " : " + seconds + "  " + meridian

    clock.innerHTML = clockTime;
},1000)





