const handleAuth = () => {
  let password = document.getElementById("password").value;
  
  if (password == "hello") {
    document.location.href = "./main.html";
  } else {
    alert("Данные неверные, повторите попытку.");
  }
};
