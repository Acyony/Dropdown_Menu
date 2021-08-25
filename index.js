let actorsWrap = document.querySelector(".actors-wrap");

actorsWrap.addEventListener("click", function (e) {
  if (e.target.tagName === "H3") {

    document.querySelectorAll(".actors").forEach((elem) => {
        if (e.target.parentNode !== elem) {
           elem.classList.remove("selected");
        }
    });


    e.target.parentNode.classList.toggle("selected");
    
  }
});
