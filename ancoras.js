

const burguer = document.getElementById("burguer");

burguer.addEventListener("click", clickMenu);

function clickMenu() {
  const itensMenu = document.getElementById("itensMenu");

  if (itensMenu.style.display === "block") {
    itensMenu.style.display = "none";
  } else {
    itensMenu.style.display = "block";
  }
}
