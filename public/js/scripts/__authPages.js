

const failedMsgAlert = document.querySelector("#register .failed_messages");

if (failedMsgAlert && typeof failedMsgAlert !== 'undefined')
{
    document.querySelectorAll("#register form input").forEach( (input) => {
        input.addEventListener('click', () => {
            failedMsgAlert.style.display = 'none';
        })
    })
}

const failedMsgAlert2 = document.querySelector("#login .failed_messages");

if (failedMsgAlert2 && typeof failedMsgAlert2 !== 'undefined')
{
    document.querySelectorAll("#login form input").forEach( (input) => {
        input.addEventListener('click', () => {
            failedMsgAlert2.style.display = 'none';
        })
    })
}


