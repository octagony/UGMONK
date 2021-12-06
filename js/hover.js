const hover = () => {
  const mainImages = document.querySelectorAll(".shop__card__img--main");
  const secondImages = document.querySelectorAll(".shop__card__img--second");
  const cardItem = document.querySelectorAll(".shop__card__item");

  cardItem.forEach((card, index) => {
    card.onmouseover = () => {
      changeImg(index);
    };
    card.onmouseout = () => {
      setDefault(index);
    };
  });

  function changeImg(index) {
    for (let main of mainImages) {
      mainImages[index].style.display = "none";
      for (let second of secondImages) {
        secondImages[index].style.display = "flex";
      }
    }
  }

  function setDefault(index) {
    for (let main of mainImages) {
      mainImages[index].style.display = "flex";
      for (let second of secondImages) {
        secondImages[index].style.display = "none";
      }
    }
  }
};

hover();
