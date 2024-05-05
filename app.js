var hour = document.getElementById("hour")
var minute = document.getElementById("min")
var second = document.getElementById("sec")
var am_pm = document.getElementById("ap")
var date = document.getElementById("date")


var now = new Date();
var bd = new Date("06/17/2024");  //mm/dd/yyyy
var milleseconds = now.getTime();
var bdMillseconds = bd.getTime();
var diff = milleseconds - bdMillseconds;
console.log("milleseconds=>", diff);
console.log("seconds=>", Math.round(diff / 1000));
console.log("minutes=>", Math.round(diff / 1000 / 60));
console.log("hours=>", Math.round(diff / 1000 / 60 / 60));
console.log("day=>", Math.round(diff / 1000 / 60 / 60 / 24));
console.log("months=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30));
console.log("years=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30 / 12));
console.log(bd);

setInterval(function(){
  var currentDate = new Date();
  if (currentDate.getHours() <= 12){
    hour.innerText = currentDate.getHours() + ":";
  } else{
    hour.innerText = currentDate.getHours() - 12  + ":";
  }

  if(currentDate.getMinutes() < 10){
    minute.innerText = "0" + currentDate.getMinutes();
  }else{
    minute.innerText = currentDate.getMinutes();  
  }
  if(currentDate.getSeconds() < 10){
    second.innerText = "0" + currentDate.getSeconds();
  }else{
  second.innerText = currentDate.getSeconds();
  }
  if(currentDate.getHours() < 12 ){
    am_pm.innerHTML = "A.M";
  }else{
    am_pm.innerHTML = "P.M";
  }
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  var months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"] 
  

  date.innerHTML = days[currentDate.getDay()] + " " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear(); 
 
}, 1000)