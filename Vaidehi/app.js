$(document).ready(function(){
  $(".count").counterUp({
    delay:10,
    time: 1200
  });
});

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});
