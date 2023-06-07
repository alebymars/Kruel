const handleNext = () => {
  const username = document.getElementById("username").value;

  if (username.length >= 3) {
    localStorage.setItem("username", username);
    document.getElementById(
      "headerText"
    ).textContent = `Привет, ${localStorage.getItem("username")}!`;
    removeMainBlock();
    newInfoPage();
  } else {
    alert("Введите свое имя (от 3 символов)");
  }
};

const removeMainBlock = () => {
  const mainBlock = document.getElementById("mainBlock");
  document.body.removeChild(mainBlock);
};

const newInfoPage = () => {
  const allData = `
  <div class="searchDivForm">
          <input id="searchText" class="inputSearch" type="search" placeholder="Naruto Shipuden" />
          <input id="searchButton" class="inputButtonForm" type="button" value="Поиск" onclick="fetchData()" />
      </div>
      <br>
      <div class="filterDivCards">
          <p class="filterText">Фильтры: </p>
          <input id="hideTv" class="inputButtonFilter" type="button" value="TV" onclick="toggleTVBlocks()" />
          <input id="hideTv" class="inputButtonFilter" type="button" value="image is not null"
              onclick="toggleEmptyBlocks()" />
      </div>

      <div id="contentBlock" class="contentBlock">
          <div id="plugCard" class="plugCard">
              <p class="plugText">
                  Пока тут пусто, сделай запрос :)
              </p>
          </div>
        </div>
  `;

  const h1 = document.createElement("h1");
  h1.innerText = "Anime Search";
  const h2 = document.createElement("h2");
  h2.innerText = "Сервис по поиску информации о аниме";
  const mainBlockInfo = document.createElement("div");
  mainBlockInfo.className = "mainBlockInfo";
  mainBlockInfo.id = "mainBlockInfo";
  mainBlockInfo.innerHTML = allData;

  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.body.appendChild(mainBlockInfo);
};
