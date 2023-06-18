// import { newInfoPage } from "./modules/newInfoPage";

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

const addLoader = () => {
  // <div class="loadingBg">
  //       <div class="loader"></div>
  //   </div>
  const loadingBg = document.createElement("div");
  loadingBg.className = "loadingBg";
  const loader = document.createElement("div");
  loader.className = "loader";

  document.body.appendChild(loadingBg);
  document.loadingBg.appendChild(loader);
};

addLoader();