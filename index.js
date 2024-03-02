function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function (res) {
      console.log(res.message);
      document.querySelector("#dog-image").src = res.message;
    })
}