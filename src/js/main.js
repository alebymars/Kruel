const fetchData = async () => {
  document.getElementById("loadingBg").style.display = "flex";
  // добавляем загрузку при изменении body
  const targetNode = document.body;
  const showLoader = () => {
    setTimeout(() => {
      document.getElementById("loadingBg").style.display = "none";
    }, 500);
  };
  const observer = new MutationObserver(showLoader);
  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);

  const userText = document.getElementById("searchText").value;
  const response = await await fetch(
    `https://kitsu.io/api/edge/anime?filter[text]=${userText}`,
    {
      credentials: "omit",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      },
      method: "GET",
      mode: "cors",
    }
  );

  const data = await response.json();
  localStorage.setItem("animeInfo", JSON.stringify(data));

  add();
};
