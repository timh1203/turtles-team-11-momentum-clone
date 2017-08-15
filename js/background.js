var now = new Date().getHours();
var timeShow = document.getElementsByClassName('time');
timeShow.innerHTML = now;

// setInterval(function(){
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
//     var timeShow = document.getElementById('time');
//     timeShow.write = hours;
// },1000);