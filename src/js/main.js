import slider from "./components/slider";
import menuItemsHide from "./components/menuItemsHide";
import burger from "./components/burger";

window.addEventListener("DOMContentLoaded", () =>{
    slider(".slider");
    menuItemsHide(".menuSelf");
    burger(".burgerMenu", ".burger", "burgerActive");
});
