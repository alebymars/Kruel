const toggleTVBlocks = () => {
  let cardBlocks = document.querySelectorAll(".cardBlock");
  for (let i = 0; i < cardBlocks.length; i++) {
    let children = cardBlocks[i].childNodes;
    for (let j = 0; j < children.length; j++) {
      if (children[j].textContent.includes("TV")) {
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
  document.getElementById("hideTv").classList.toggle("inputButtonFilter");
  document.getElementById("hideTv").classList.toggle("activeInputButtonFilter");
};

window.toggleTVBlocks = toggleTVBlocks;

export { toggleTVBlocks };
