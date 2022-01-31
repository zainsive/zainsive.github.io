AOS.init({ duration: 700 });

var kursorx = new kursor({
  removeDefaultCursor: true,
  type: 1,
});

const cards = document.querySelectorAll(".img-card");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("mousemove", rotate);
  card.addEventListener("mouseout", stopRotate);
}

function rotate(e) {
  const cardItem = this.querySelector(".card-item");
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform =
    "rotateX(" +
    -(e.offsetY - halfHeight) / 30 +
    "deg) rotateY(" +
    (e.offsetX - halfHeight) / 30 +
    "deg)";
}
function stopRotate() {
  const cardItem = this.querySelector(".card-item");
  cardItem.style.transform = "rotate(0)";
}

$("html").css("--k-color", "0,0,0");

document.addEventListener("scroll", (e) => {
  if (this.scrollY && this.scrollY > 1100) {
    $("html").css("--k-color", "255,255,255");
    $("body").addClass("dark-theme");
    $("body").removeClass("light-theme");
  } else {
    $("html").css("--k-color", "0,0,0");
    $("body").addClass("light-theme");
    $("body").removeClass("dark-theme");
  }
});
