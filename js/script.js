const advert = document.querySelectorAll(".promo__adv img");
const genre = document.querySelector(".promo__genre");
const backgr = document.querySelector(".promo__bg");
const listSerial = document.querySelector(".promo__interactive-list");

const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificient Century",
    "The Great Seljuks: Guardians ... ",
  ],
};

console.log(advert);
advert.forEach((item) => {
  item.remove();
});
genre.textContent = "Comedy";
backgr.style.backgroundImage = 'url("img/1.jpg")';

console.log(listSerial);
listSerial.innerHTML = "";
seriesDB.series.forEach((item, idx) => {
  listSerial.innerHTML += `
  <li class="promo__interactive-item">${idx + 1}${item}
    
    <div class="delete"></div>
  </li>`;
});
