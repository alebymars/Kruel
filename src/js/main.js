const fetchData = async () => {
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
  //   let animeList = []; // создаем пустой список для хранения аниме

  //   for (let i = 0; i < 10; i++) {
  //     // перебираем все элементы массива данных
  //     let animeData = localStorage.getItem("animeInfo"); // получаем данные об одном из элементов массива

  //     if (animeData !== null && animeData.length > 0) {
  //       // если данные есть в хранилище, то добавляем его в список
  //       animeList.push(animeData); // добавляем его в список
  //     } else {
  //       console.log("Нет доступных аниме.");
  //     }
  //   }

  const animeInfo = JSON.parse(localStorage.getItem("animeInfo"));
  const result = Object.values(animeInfo);
  result[0].map((data, index) => {
    // const result = JSON.stringify(data.id);
    const title = data.attributes.titles.en;
    const description = data.attributes.description;
    const type = data.attributes.showType;
    const series = data.attributes.episodeCount;
    const status = data.attributes.status;
    const startDate = data.attributes.startDate;
    const endDate = data.attributes.endDate;
    const ageRating = data.attributes.ageRatingGuide;
    const image = data.attributes.coverImage.original;
    const url = data.attributes.slug;

    let contentBlock = document.querySelector(".contentBlock");
    let block = document.createElement("div");
    block.className = "cardBlock";
    let allInfo = `<img src="${image}" class="cardImage" /><p class="cardText"><b>${title}</b><br><b>type: </b> ${type}<br> <b>series: </b>${series}<br><b>status: </b>${status}<br><b>Date: </b>${startDate} — ${endDate} <br><b>Age Rating: </b>${ageRating}</p><a class="inputButton" href="https://kitsu.io/anime/${url}"><p>watch</p></a>`;
    block.innerHTML = allInfo;
    contentBlock.appendChild(block);
    console.log(`${index}) ${JSON.stringify(data)}`);
  });

  //   console.log(result);
  //   jsanime.map((data, index) => {
  //     console.log(`data => ${data} ====== index => ${index}`);
  //   });
  //   console.log(`allAnimeIndo => ${allAnimeInfo}`);

  //   document.getElementById("anime").innerHTML = animeList.join(", "); // объединяем все элементы списка в одну строку через запятую и пробел
};
