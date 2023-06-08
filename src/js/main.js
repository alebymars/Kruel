const fetchData = async () => {
  const contentBlock = document.querySelector(".contentBlock");
  const cb = document.getElementById("cardBlock");
  //   contentBlock.removeChild(cb);

  let userText = document.getElementById("searchText").value;
  const response = await await fetch(
    `https://kitsu.io/api/edge/anime?filter[text]=${userText}`,
    {
      credentials: "omit",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Sec-GPC": "1",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
      method: "GET",
      mode: "cors",
    }
  );

  const data = await response.json();
  localStorage.setItem("animeInfo", JSON.stringify(data));
  //   console.log(`data => ${JSON.stringify(data)}`);

  add();
};

const add = () => {
  const animeInfo = JSON.parse(localStorage.getItem("animeInfo"));
  const result = Object.values(animeInfo);

  let contentBlock = document.querySelector(".contentBlock");
  //   contentBlock.removeChild(cb);
  const cb = document.getElementById("cardBlock");
  const pc = document.getElementById("plugCard");
  // console.log("До", typeof pc);
  // if (typeof pc == Object) {
  //   contentBlock.removeChild(pc);
  // }

  if (document.getElementById("plugCard") !== null) {
    contentBlock.removeChild(pc);
  }

  if (document.getElementById("cardBlock") !== null) {
    const parentElement = document.getElementById("contentBlock");
    parentElement.innerHTML = "";

    // while (cb.firstChild) {
    //   cb.removeChild(cb.firstChild);
    // }
  }

  // console.log("После", typeof pc);
  //   console.log(Object.keys(animeInfo.data).length);
  //   if (Object.keys(animeInfo).length) {
  //     contentBlock.removeChild(cb);
  //   }

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
      // console.log(`${index}) ${JSON.stringify(data)}`);
    });

  localStorage.clear();
  // console.log("LS после clear()", localStorage.getItem("animeInfo"));
};
