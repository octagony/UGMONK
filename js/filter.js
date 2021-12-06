const filter = () => {
  const navLinks = document.querySelectorAll(".item__link");
  const navItems = document.querySelectorAll(".shop__card__item");

  for (let link of navLinks) {
    link.onclick = function () {
      event.preventDefault();
      filterItems(this.dataset.filter);
    };
  }

  function filterItems(pick) {
    for (let items of navItems) {
      items.style.display = "none";
      if (items.classList.contains(pick)) {
        setTimeout(() => {
          items.style.display = "flex";
        }, 0);
      }
    }

    for (let link of navLinks) {
      if (link.dataset.filter === pick) {
        link.classList.add("link--active");
      } else {
        link.classList.remove("link--active");
      }
    }
  }
};

filter();
