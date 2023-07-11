menuDisplay();

// Menu Display
function menuDisplay() {
  let menuSpan = document.querySelector("span.menu i"),
    ulLinks = document.querySelector("header .header .links");
  menuSpan.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("fa-bars")) {
      e.currentTarget.classList.replace("fa-bars", "fa-x");
      ulLinks.classList.remove("hidden");
    } else if (e.currentTarget.classList.contains("fa-x")) {
      e.currentTarget.classList.replace("fa-x", "fa-bars");
      ulLinks.classList.add("hidden");
    }
  });
}
