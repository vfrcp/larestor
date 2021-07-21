export default function burger(place, btn, change){
    const
        burgerMenu = document.querySelector(place),
        btnPlace = document.querySelector(btn);
    const changeF= (event) =>{
        console.log(event.target.tagName);
        if(event.target.tagName == "A" || event.target.closest("span") || event.target == btnPlace){
            if(btnPlace.classList.contains(change)){
                btnPlace.classList.remove(change);
                document.body.style.overflow = "auto";
                burgerMenu.style.top = "-1500px";
            }else{
                btnPlace.classList.add(change);
                document.body.style.overflow = "hidden";
                burgerMenu.style.top = "0";
            }
        }
    };
    burgerMenu.addEventListener("click", () => changeF(event));
    btnPlace.addEventListener("click", () => changeF(event));
}