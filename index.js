$(window).on("load", async function () {
    $(".loader").fadeOut(1000);
    delay(1000).then(() => $(".content").fadeIn(1000));
  });
  
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  document.getElementById("btn").onclick = function () {
    location.href = "https://nouhidev.github.io/";
  };
  
/* Setup global Navbar */ 
const NAV_URL = "https://nouhi.dev/assets/html-templates/navbar.txt";

fetch(NAV_URL)
  .then( r => r.text() )
  .then( t => {
    var whereToInject = document.getElementsByTagName("header")[0];
    whereToInject.innerHTML += t;
});