// 1

const menuIsOpen = false;

if (menuIsOpen) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// 2

// https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354

// platforms = 48
// genres = action
// publishers = 354

// 3

const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
const resultDiv = document.querySelector(".results");

async function getCats() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result.length);

  for (let i = 0; i < result.length; i++) {
    if (i >= 5) {
      break;
    }
    resultDiv.innerHTML += `<p>${i + 1}. ${result[i].text}</p>`;
  }
}

getCats();
