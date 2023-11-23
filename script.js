const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageitemnum = movielist[i].querySelectorAll("img").length;
  console.log(imageitemnum);

  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageitemnum - (4 + clickCounter) >= 0) {
      movielist[i].style.transform = `translateX(${
        movielist[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
