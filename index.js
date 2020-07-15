let menu = document.querySelector(".header__menu");
let navbar = document.querySelector(".header__middle");
let close = document.querySelector(".header__close");

menu.addEventListener("click", function(e) {
  if (e.target.className === "header__menu") {
    navbar.style.display = "block";
  } 
});

close.addEventListener("click", function(e) {
    setTimeout(function() {
        if (e.target.className === "header__close") {
          navbar.animate(
            [{ transform: "translateX(0px)" }, { transform: "translateX(-900px)" }],
            {
              duration: 700
            },
            "linear"
          );
        }
      }, 200);
    
      setTimeout(function() {
        navbar.style.display = "none";
      }, 700);
    
});
