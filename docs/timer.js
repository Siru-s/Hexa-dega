var dday = new Date("February 23, 2022, 2:00:00").getTime();

setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.ceil((gap % (1000 * 60)) / 1000);

  document.getElementById("D1").innerHTML = day + "일";
  document.getElementById("count1").innerHTML = hour + "시간 " + min + "분 " + sec + "초";
}, 1000);

var dday1 = new Date("February 23, 2022, 2:00:00").getTime();

setInterval(function() {
  var today1 = new Date().getTime();
  var gap1 = dday1 - today1;
  var day1 = Math.ceil(gap1 / (1000 * 60 * 60 * 24));
  var hour1 = Math.ceil((gap1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min1 = Math.ceil((gap1 % (1000 * 60 * 60)) / (1000 * 60));
  var sec1 = Math.ceil((gap1 % (1000 * 60)) / 1000);

  document.getElementById("D2").innerHTML = day1 + "일";
  document.getElementById("count2").innerHTML = hour1 + "시간 " + min1 + "분 " + sec1 + "초";
}, 1000);	
