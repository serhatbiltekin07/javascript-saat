let names = prompt("lütfen Adınızı Giriniz:");
let text1 = document.querySelector("#info");

function displayTime() {
  var date = new Date().toLocaleString();
  document.getElementById("myClock").innerHTML = date;
}
setInterval(displayTime, 1000);

document.getElementById("myName").innerHTML = `${names}`;
