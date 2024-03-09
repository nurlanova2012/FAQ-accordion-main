hundleBtn = document.querySelectorAll(".content-card-items");

for (i = 0; i < hundleBtn.length; i++) {
  document
    .querySelectorAll(".content-card-items")
    [i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
}
