const btnObs = document.getElementById("obs");
const poup = document.querySelector(".poup");
const exit = document.querySelector(".exit");

btnObs.addEventListener("click", ()=>{
    poup.style.display = "block";
});

exit.addEventListener("click", ()=>{
    poup.style.display = "none";
})