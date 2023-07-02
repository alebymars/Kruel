const newInfoPage = () => {
  const allData = `
    <div class="searchDivForm">
            <input id="searchText" class="inputSearch" type="search" placeholder="Naruto Shipuden" />
            <input id="searchButton" class="inputButtonForm" type="button" value="Поиск" onclick="fetchData()" />
            <input id="searchButton" class="inputButtonForm" type="button" value="Выйти" onclick="location.reload()" />
        </div>
        <br>
        <div class="filterDivCards">
            <p class="filterText">Фильтры: </p>
            <input id="hideTv" class="inputButtonFilter" type="button" value="tv" onclick="toggleTVBlocks()" />
            <input id="hideImageIsNull" class="inputButtonFilter" type="button" value="image is not null"
                onclick="toggleEmptyBlocks()" />
            <input id="hideStatus" class="inputButtonFilter" type="button" value="status"
                onclick="toggleStatusBlocks()" />
        </div>
  
        <div id="contentBlock" class="contentBlock">
            <div id="plugCard" class="plugCard">
                <p class="plugText">
                    Пока тут пусто, сделай запрос :)
                </p>
            </div>
        </div>
    `;

  // можно добавлять код так
  const h1 = document.createElement("h1");
  h1.innerText = "Anime Search";
  const h2 = document.createElement("h2");
  h2.innerText = "Сервис по поиску информации о аниме";
  const mainBlockInfo = document.createElement("div");
  mainBlockInfo.className = "mainBlockInfo";
  mainBlockInfo.id = "mainBlockInfo";
  // а можно добавить код вот так (быстрее)
  mainBlockInfo.innerHTML = allData;

  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.body.appendChild(mainBlockInfo);
};

window.newInfoPage = newInfoPage;

export { newInfoPage };
