const $ = document;
const toggleBtn = $.querySelector("#toggle-btn")
const menus = $.querySelectorAll(".menu a")
console.log(menus);
let isActive = false



toggleBtn.addEventListener("click", ()=>{
    if(!isActive){
        menus[0].style.transform = "translate(150px , 0px)"
        menus[1].style.transform = "translate(150px , 90px)"
        menus[2].style.transform = "translate(90px , 150px)"
        menus[3].style.transform = "translate(0px , 150px)"



        toggleBtn.classList.add("active")
        isActive = true
    }else{
        menus.forEach(element => {
            element.style.transform = "translate(0,0)"
            
        });
        toggleBtn.classList.remove("active")
        isActive = false
        
    }
})