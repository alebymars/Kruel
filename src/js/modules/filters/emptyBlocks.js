const toggleEmptyBlocks = () => {
  let cardBlocks = document.querySelectorAll(".cardBlock");
  for (let i = 0; i < cardBlocks.length; i++) {
    let children = cardBlocks[i].childNodes;
    for (let j = 0; j < children.length; j++) {
      if (
        children[j].tagName === "IMG" &&
        children[j].src.includes("empty.png")
      ) {
        if (cardBlocks[i].style.display === "none") {
          cardBlocks[i].style.display = "flex";
        } else {
          cardBlocks[i].style.display = "none";
        }
        break;
      }
    }
  }
  // меняем цвет активной кнопки
  document.getElementById("hideImageIsNull").classList.toggle("inputButtonFilter");
  document.getElementById("hideImageIsNull").classList.toggle("activeInputButtonFilter");
};

window.toggleEmptyBlocks = toggleEmptyBlocks;

export { toggleEmptyBlocks };
