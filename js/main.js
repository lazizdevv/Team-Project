let fixMob = document.querySelector(".fix-mob");

let closeBtn = document.querySelector(".close-btn");

let fixPln = document.querySelector(".fix-pln");


fixMob.addEventListener("click", ()=>{
    let group = document.querySelector(".group");
    group.classList.toggle("df");
    fixMob.classList.toggle("bottom");
})

closeBtn.addEventListener("click", () => {
  let group = document.querySelector(".group");
    group.classList.remove("df");
    fixMob.classList.remove("bottom");
});



fixPln.addEventListener("click", () => {
  let group = document.querySelector(".group");
  group.classList.toggle("df");
  fixPln.classList.toggle("bottom");
  
});

closeBtn.addEventListener("click", () => {
  let group = document.querySelector(".group");
  group.classList.remove("df");
  fixPln.classList.remove("bottom");
});