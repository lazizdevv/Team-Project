let fixMob = document.querySelector(".fix-mob");

let closeBtn = document.querySelector(".close-btn");

fixMob.addEventListener("click", ()=>{
    let group = document.querySelector(".group");
    group.classList.toggle("df");
    // group.style.display = "flex"
    fixMob.classList.toggle("bottom");
})

closeBtn.addEventListener("click", () => {
  let group = document.querySelector(".group");
//   group.style.display = "none";
    group.classList.remove("df");
    fixMob.classList.remove("bottom");
    


});