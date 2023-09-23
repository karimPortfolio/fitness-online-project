import { getEle } from "./__myFramework.js";


const searchIcon = getEle(".search_icon svg");
const searchClose = getEle(".close_search_input svg");
const searchBtn  = getEle(".search_btn button");

if (searchIcon !== null || searchClose  !== null || searchBtn !== null)
{
    searchIcon.addEventListener('click', () => {
        const searchInput = getEle("#search_input");
        searchInput.classList.remove("search_input_hidden");
        searchInput.classList.add("search_input");
        searchIcon.style.display = "none";
    })

    searchClose.addEventListener('click', () => {
        const searchInput = getEle("#search_input");
        searchInput.classList.remove("search_input");
        searchInput.classList.add("search_input_hidden");
        searchIcon.style.display = "block";
    })

    searchBtn.addEventListener('click' , () => {
        let searchInputValue = getEle("#search_input input").value;
        if (searchInputValue !== "")
        {
            window.location = `/search?s=${searchInputValue}`;
            searchInputValue = ""
        }
    })

}

const closeSideMenuBtn = getEle("#side_menu .close_btn");
const openSideMenuBtn = getEle(".side_menu_btn");

if (closeSideMenuBtn !== null || openSideMenuBtn !== null)
{
    openSideMenuBtn.addEventListener('click' , () => {
        const sideMenu = getEle("#side_menu");
        sideMenu.classList.remove("side_menu_close");
        sideMenu.classList.add("side_menu_open");
    })

    closeSideMenuBtn.addEventListener('click' , () => {
        const sideMenu = getEle("#side_menu");
        sideMenu.classList.remove("side_menu_open");
        sideMenu.classList.add("side_menu_close");
    })

}

