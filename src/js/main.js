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
  console.log(`data => ${JSON.stringify(data)}`);

//   add();
};

const add = () => {
  let animeList = []; // создаем пустой список для хранения аниме

  for (let i = 0; i < 10; i++) {
    // перебираем все элементы массива данных
    let animeData = localStorage.getItem("animeInfo"); // получаем данные об одном из элементов массива

    if (animeData !== null && animeData.length > 0) {
      // если данные есть в хранилище, то добавляем его в список
      animeList.push(animeData); // добавляем его в список
    } else {
      console.log("Нет доступных аниме.");
    }
  }

  document.getElementById("anime").innerHTML = animeList.join(", "); // объединяем все элементы списка в одну строку через запятую и пробел
};
