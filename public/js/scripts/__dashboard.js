import { getEle } from "./__myFramework.js";


const server_messages = getEle("#server_messages");
if (server_messages !== null)
{
    setTimeout( () => {
        server_messages.style.display = "none";
    },6000)
}

