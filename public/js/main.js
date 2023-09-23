
import "./scripts/__authPages.js"
import { getEle } from "./scripts/__myFramework.js"
import "./scripts/__navbar.js"
import "./scripts/__dashboard.js"



const title = getEle("title");
if (title !== null)
{
    if (title.innerHTML === "Sign in" || title.innerHTML === "Signup")
    {
        getEle("header").style.display = 'none';
        getEle("footer").style.display = 'none';
    }
}

