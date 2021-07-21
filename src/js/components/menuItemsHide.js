export default function Itemshide(place){
    const
        menu =document.querySelector(place),
        btnShow = menu.querySelector(".show"),
        dishs = menu.querySelectorAll(".menuItem");
    
    let showed = 1;
    const toggle = () =>{
        dishs.forEach(item => {
            if(showed){
                if(!item.hasAttribute("data-vegan")){
                    item.style.display = "none";
                }
            }else{
                item.style.display = 'flex';
            }
        });
        if(showed){
            showed--;
            btnShow.classList.add("showBefore");
        }else{
            showed++;
            btnShow.classList.remove("showBefore");
        }
        console.log(showed);
    };
    btnShow.addEventListener("click", toggle);
}