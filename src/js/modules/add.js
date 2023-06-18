const add = () => {
  const animeInfo = JSON.parse(localStorage.getItem("animeInfo"));
  const result = Object.values(animeInfo);

  let contentBlock = document.querySelector(".contentBlock");
  const cb = document.getElementById("cardBlock");
  const pc = document.getElementById("plugCard");

  if (document.getElementById("plugCard") !== null) {
    contentBlock.removeChild(pc);
  }

  if (document.getElementById("cardBlock") !== null) {
    const parentElement = document.getElementById("contentBlock");
    parentElement.innerHTML = "";
  }

  if (result[0].length < 1) {
    let emptyResponse = document.createElement("div");
    emptyResponse.className = "plugCard";
    emptyResponse.id = "plugCard";
    emptyResponse.innerHTML =
      "<p class='plugText'>Это некорректный запрос, попробуй что-то другое :)</p>";
    contentBlock.appendChild(emptyResponse);
    console.log("empty");
  }

  result &&
    result[0].map((data) => {
      const title = data.attributes.titles.en;
      const description = data.attributes.description;
      const type = data.attributes.showType;
      const series = data.attributes.episodeCount;
      const status = data.attributes.status;
      const startDate = data.attributes.startDate;
      const endDate = data.attributes.endDate;
      const ageRating = data.attributes.ageRatingGuide;
      let image = data?.attributes?.coverImage?.original || "../img/empty.png";
      const url = data.attributes.slug;

      let block = document.createElement("div");
      block.className = "cardBlock";
      block.id = "cardBlock";
      let allInfo = `<img src="${image}" class="cardImage" /><p class="cardText"><b>${
        title ? title : "Название отсутствует."
      }</b><br><b>Описание: <b class="cardDescription">${description}</b></b><b>Тип: </b> ${type}<br> <b>Серий: </b>${series}<br><b>Статус: </b>${status}<br><b>Начало/Конец: </b>${startDate} — ${endDate} <br><b>Возрастной рейтинг: </b>${ageRating}</p><a target="_blank" class="inputButton" href="https://kitsu.io/anime/${url}"><p>смотреть</p></a>`;
      block.innerHTML = allInfo;
      contentBlock.appendChild(block);
    });
  localStorage.clear();
};

window.add = add;

export { add };
